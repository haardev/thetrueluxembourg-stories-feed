import React, { useContext, useEffect } from 'react';
import Post from './Post';
import { DataContext } from './DataProvider';
import { FILTER_TYPES } from './Filter';

const getFilteredPosts = (filter, posts) => {
    if (!filter) {
        return posts;
    }

    let key = '';

    switch (filter.type) {
        case FILTER_TYPES.category: {
            key = 'categoryId';
            break;
        }
        case FILTER_TYPES.post: {
            key = 'id';
            break;
        }
        default: {
            key = '';
        }
    }

    return posts.filter((item) => item[key] === filter.value);
};

const PostsContainer = () => {
    const { state } = useContext(DataContext);
    const { posts, loading: { posts: isLoading }, filter } = state;

    useEffect(() => {
        //Get the posts and filter, compare to where it should go
    }, [posts, filter]);

    return (
        <div className="post-container">
            { isLoading && <h3>Loading stories...</h3> }
            { getFilteredPosts(filter, posts).map((item, index) => <Post key={ index } { ...item } />) }
        </div>
    );
};

export default PostsContainer;
