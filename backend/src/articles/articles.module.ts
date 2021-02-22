import { Module, HttpModule } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';
import { ArticlesSchema } from './schema/articles.schema';

@Module({
  imports: [
    HttpModule.register({
      responseType: 'json',
    }),
    MongooseModule.forFeature([{ name: 'Articles', schema: ArticlesSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
