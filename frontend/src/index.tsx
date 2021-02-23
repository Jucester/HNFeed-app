import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './components/Articles/ArticlesComponent';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <header className="banner">
            <h1> HN Feed </h1>
            <h3> We &lt;3 hacker news! </h3>
        </header>
        <Articles />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
