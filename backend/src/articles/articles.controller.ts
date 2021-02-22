// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { IArticle } from './interface/ArticleInterface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  // We only need a route to get the articles saved to mongodb
  @Get()
  getNews(): Promise<IArticle[]> {
    return this.articleService.getArticles();
  }
}
