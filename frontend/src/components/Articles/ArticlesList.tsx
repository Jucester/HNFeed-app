import React, { Fragment, useState, useEffect, useRef } from 'react';
import { getArticles } from './ArticleService';
import Article from './Article';

// styling container wrapper
const containerStyle = {
    padding: '5px 40px',
    margin: '0 auto',
};

const ArticlesList: React.FC = () => {
    const [articles, setArticles] = useState([]);

    const loadArticles = async () => {
        console.log('Working?');
        const res = await getArticles();
        //console.log(res);
        setArticles(res);
    };

    useEffect(() => {
        loadArticles();
    }, []);

    return (
        <div style={containerStyle}>
            {articles.map((article: any, i: number) => {
                return <Article key={i} article={article} loadArticles={loadArticles} />;
            })}
        </div>
    );
};

export default ArticlesList;
