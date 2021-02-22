import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Model } from 'mongoose';
import { IArticle } from './interface/ArticleInterface';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ArticlesService {
  constructor(
    private http: HttpService,
    @InjectModel('Articles') private readonly articlesModel: Model<IArticle>,
  ) {}

  // This function gets all articles saved in Mongodb
  async getArticles(): Promise<IArticle[]> {
    return await this.articlesModel.find().sort({ created_at: -1 });
  }

  // This function make a call to the hn.algolia api to get all recent post about Node.js and add the fetched posts to mongodb
  // With the Cron decorator we schedule the function to execute once an hour
  @Cron(CronExpression.EVERY_HOUR)
  async savingArticles(): Promise<Observable<AxiosResponse<any>>> {
    console.log('Running every hour');

    //const previousArticles = await this.articlesModel.find();
    //console.log(previousArticles);

    return await this.http
      .get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs')
      .toPromise()
      .then((res) => {
        // console.log('Getting from hn.feed service');
        // console.log(res.data.hits)
        // console.log(Object.keys(res.data.hits).length)

        // Loop through the data received from the API
        res.data.hits.forEach(async (hit) => {
          if (hit.title || hit.story_title) {
            // Check if the story is repeated comparing his story_id
            const prev = await this.articlesModel.findOne({
              story_id: hit.story_id,
            });

            // If the story doesn't exist in our database, then it's added
            if (!prev) {
              console.log('Adding data');
              const newArticle = new this.articlesModel(hit);
              await newArticle.save();
            }
          }
        });
        return res.data;
      })
      .catch((err) => console.log('Err: ', err));
  }
}
