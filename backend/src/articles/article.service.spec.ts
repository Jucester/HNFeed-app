import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import * as request from 'supertest';

const app = 'http://localhost:5000';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesService],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('GET "/articles" Should list all articles in mongodb)', async (done) => {
    const result = await request(app).get('/articles');
    expect(result.body.length).toBeGreaterThan(1);
    expect(result.status).toEqual(200);
    done();
  });
});
