import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import * as request from 'supertest';
const app = 'http://localhost:5000';

describe('ArticlesController', () => {
  let controller: ArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET "/articles" Should list all articles in mongodb)', async (done) => {
    const result = await request(app).get('/articles');
    expect(result.status).toEqual(200);
    done();
  });
});
