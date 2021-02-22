/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface IArticle extends Document {
  title?: string;
  url?: string;
  author?: string;
  story_text?: string;
  comment_text?: string;
  story_id?: string;
  story_title?: string;
  story_url?: string;
  created_at?: string;
}
