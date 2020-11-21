import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import cover from './cover.png';
import Post from './Post';
import { fetchPosts } from './apiUtils';
import FilterBar from './FilterBar';
import { DataContext } from './DataProvider';
import PostsContainer from './PostsContainer';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="content-container">
                    <PostsContainer />
                    <FilterBar />
                </div>
            </div>
        </div>
    );
}

export default App;
