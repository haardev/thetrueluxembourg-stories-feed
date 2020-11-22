import React, { useContext, useEffect } from 'react';
import './App.css';
import FilterBar from './FilterBar';
import { DataContext } from './DataProvider';
import PostsContainer from './PostsContainer';

function App() {
    const { action } = useContext(DataContext);

    useEffect(() => {
        action.getCategories();
        action.getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            <div className="container">
                <div className="content-container">
                    <PostsContainer/>
                    <FilterBar/>
                </div>
            </div>
        </div>
    );
}

export default App;
