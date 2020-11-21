import React, { useContext } from 'react';
import Post from './Post';
import { DataContext } from './DataProvider';

const PostsContainer = () => {
    const { state } = useContext(DataContext);
    const { posts, loading: { posts: isLoading } } = state;

    return (
        <div className="post-container">
            { isLoading && <h3>Loading stories...</h3> }
            { posts.map((item, index) => <Post key={ index } { ...item } />) }
        </div>
    );
};

export default PostsContainer;
