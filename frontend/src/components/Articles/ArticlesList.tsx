import React, { Fragment, useState, useEffect, useRef } from 'react';
import { getArticles } from './ArticleService';
import Article from './Article';

// styling post container
const divStyle = {
    color: 'blue',
    height: '250px',
    textAlign: 'center',
    padding: '5px 10px',
    background: '#eee',
    marginTop: '15px'
};

// styling container wrapper
const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
}


const ArticlesList : React.FC = () => {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1);

    const loader = useRef(null)

    const loadArticles = async () => {
        const res = await getArticles();
        console.log('Data: ', res.data);
        setArticles(res.data);
    }

    useEffect(() => {
        loadArticles();
    }, []);

    return (
        <div style={containerStyle}>
         
            {
                articles.map( (article : any, i : number ) => {
                    return (
                            <Article article={article} />
                    )
                })
            }
        </div>
    )
} 

export default ArticlesList;