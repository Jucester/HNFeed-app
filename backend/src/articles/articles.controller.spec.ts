import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import * as request from 'supertest';

const app = 'http://localhost:5000';

describe('ArticlesController', () => {
 
  it('/GET Should list al articles', async (done) => {
      const result = await request(app).get('/articles');
      expect(result.status).toEqual(200);
      done();
  });

});