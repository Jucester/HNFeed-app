import React, { FunctionComponent, useState } from 'react';
import moment from 'moment';
import { IArticles } from './IArticle';
import styled from 'styled-components';

import icon from './img/delete.png'
import { Console } from 'console';

const Arti = styled.div`

    padding: 10px 20px;
    margin: 0 20px;
    border-bottom: 1px #ccc solid;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    color: #333;
    font-size: 13px;
    cursor: pointer;
    transition: .5s;

    .author {
        color: #999;
    }
    
    .box {
        display: flex;
        align-items: center;
    }
    .icon {
        margin-left: 10px;
        width: 20px;
        height: 20px;
        
        img {
            width: 100%;
            height: 100%;
        }
    }
    .notdisplayed {
        transition: .2s;
        //display: none;
        opacity: 0;
    }

    .display {
        transition: .2s;
        //display: block;
        opacity: 1;
    }
    
    :hover{
        background-color: #fafafa;
    }
`;

moment.updateLocale('en', {
    calendar : {
        lastDay : '[Yesterday]',
        sameDay : '[Today]'
    }
});

interface Props {
    article: IArticles;
    loadArticles: () => void;
}


const Article : FunctionComponent<Props>  = ({article, loadArticles} : Props ) => {
  
    const url = article.url || article.story_url;
    const [display, setDisplay] = useState('notdisplayed');


    // To change the visibility of the delete icon
    const showButton = e => {
        e.preventDefault();
        setDisplay('displayed');
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay('notdisplayed');
    };

  
    /* 
        Shows the hour in the required format: if the date it's today shows the hour in 12h clock format,
        if is last day shows 'yesterday' and if is previous shows the month and day
    
    */
    const showingDate = () => {
        
        if(moment(article.created_at).calendar() !== 'Today') {
            return moment(article.created_at).calendar() === 'Yesterday' 
                   ? moment(article.created_at).calendar() 
                   :  moment(article.created_at).format("MMM D")
          
        } 

        return moment(article.created_at).format('hh:mm A');
    }   

    /*
        Handle Delete (add the story_id to the localStorage)
    */
    const deleteRow = () => {
        // First get what we have in the removeds var from localStorage
        let removeds = JSON.parse(localStorage.getItem('Removeds'));

        // if the var is empty, then assign the first value
        if(!removeds) {
            localStorage.setItem('Removeds', article.story_id);
            return;
        }
        // if not empty, then check if is already an array so we can push more items
        if(Array.isArray(removeds)) {
            let arr = [...removeds, article.story_id];
            localStorage.setItem('Removeds', JSON.stringify(arr));
            return;
        }
        
        // Finally, if not empty and neither and array, we make the first array by adding the second value together
        let arr = [removeds, article.story_id]
        localStorage.setItem('Removeds', JSON.stringify(arr));
    }

    const navigateToExternalUrl = (url: string, shouldOpenNewTab: boolean = true) => {
            shouldOpenNewTab ? window.open(url, "_blank") : window.location.href = url;
    }

    
    // Using moment to return the relative date
    return (
        <div className="listElement">
            <Arti 
                onClick={()=> {
                    console.log('onclick')
                    //window.open(url, "_blank")
                    //window.location.reload();
                   
                }
            }  
                onMouseEnter={e => showButton(e)}
                onMouseLeave={e => hideButton(e)} 
            >
                <p> { article.title || article.story_title } - <span className="author"> { article.author } </span> - </p>
    
                <div className="box"> 
                    <span>
                        { showingDate() } 
                    </span>
                    <span className={display}> 
                        <div className="icon" onClick={() => { deleteRow(); loadArticles(); }}> 
                            <img src={icon} alt="Delete icon" /> 
                        </div> 
                    </span> 
                </div>
            </Arti>
        </div>
    )
}

export default Article;