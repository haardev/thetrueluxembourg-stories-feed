import React, { useContext } from 'react';
import Post from './Post';
import { DataContext } from './DataProvider';

const getFilteredPosts = (selectedCategory, posts) => {
    if (!selectedCategory) {
        return posts;
    }

    return posts.filter((item) => item.categoryId === selectedCategory);
};

const PostsContainer = () => {
    const { state } = useContext(DataContext);
    const { posts, loading: { posts: isLoading }, selectedCategory } = state;

    return (
        <div className="post-container">
            { isLoading && <h3>Loading stories...</h3> }
            { getFilteredPosts(selectedCategory, posts).map((item, index) => <Post key={ index } { ...item } />) }
        </div>
    );
};

export default PostsContainer;
