/*
import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import * as request from 'supertest';

const app = 'http://localhost:5000';

describe('ArticlesService', () => {
  //let service: ArticlesService;

  beforeEach(async () => {
 
    console.log('Article Service')
  });

  it('Should get data', async (done) => {
   
    const result = await request(app).get('/articles');
    expect(result.body.length).toBeGreaterThan(1);
    expect(result.status).toEqual(200);
    done();

  });
});
*/

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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});