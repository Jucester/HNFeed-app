import React, { Fragment } from 'react';
import ArticlesList from './ArticlesList';

function Articles(): JSX.Element {
    return (
        <div data-testid='articlesContainer'>
            <ArticlesList />
        </div>
    );
}

export default Articles;
