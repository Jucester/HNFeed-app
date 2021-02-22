import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {IArticle} from '../src/articles/interface/ArticleInterface';
import { Mongoose } from 'mongoose';

const app = 'http://localhost:5000';

describe('AppController (e2e)', () => {
  //let app: INestApplication;
  
  beforeEach(async () => {
    /*
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();*/
    console.log('Working')
  
  });

  it('/ (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  /*
  it('GET /articles)', async (done) => {
 
        const result = await request(app).get("/articles");
        //console.log(result.body);
        //expect(result.text).toEqual("From articles");
        expect(result.body.length).toBeGreaterThan(1);
        expect(result.body[0]).toBe(IArticle);
        expect(result.status).toEqual(200);
        done();
  }); */

  it('GET "/articles" Should list all articles in mongodb)', async (done) => {
 
      const result = await request(app).get("/articles");
      expect(result.body.length).toBeGreaterThan(1);
      expect(result.status).toEqual(200);
      done();

  });
  /*
  it('GET "/articles/news" Should get recently posted articles about Node.js on Hacker News and add to mongodb)', async (done) => {
 
    const result = await request(app).get("/articles/news");
    //console.log(result);
    expect(result.body).toEqual(Promise);
    expect(result.status).toEqual(200);
    done();

}); */


});


