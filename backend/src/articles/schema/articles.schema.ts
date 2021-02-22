import { Schema } from 'mongoose';

export const ArticlesSchema = new Schema({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    author: {
        type: String,
    },
    story_text: {
        type: String
    },
    comment_text: {
        type: String,
    },
    story_id: {
        type: Number
    },
    story_title: {
        type: String
    },
    story_url: {
        type: String
    },
    created_at: {
        type: Date,
        required: true,
    }
});
