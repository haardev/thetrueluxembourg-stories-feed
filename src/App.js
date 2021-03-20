import React, { useContext, useEffect } from 'react';
import './App.css';
import FilterBar from './FilterBar';
import { DataContext } from './DataProvider';
import PostsContainer from './PostsContainer';
import { css } from '@linaria/core';

const App = () => {
    const { action } = useContext(DataContext);
    const containerRoot = css`
      --main-bg-color: #dadce0;
      --hover-bg-color: #e8eaec;

      max-width: 950px;
      margin: 0 auto;
      padding-top: 18px;
      width: 100%;
    `;

    useEffect(() => {
        action.getCategories();
        action.getPosts();
    }, []);

    return (
        <div className="App">
            <div className={containerRoot}>
                <div className="content-container">
                    <PostsContainer/>
                    <FilterBar/>
                </div>
            </div>
        </div>
    );
};

export default App;
