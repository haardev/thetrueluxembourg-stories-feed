import {
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FILTER_POSTS
} from '../reducers/actionTypes';
import { fetchCategories, fetchPosts } from '../apiUtils';

const getPosts = async (dispatch) => {
    try {
        dispatch({ type: FETCH_POSTS_REQUEST });
        const posts = await fetchPosts();
        dispatch({
            payload: posts,
            type: FETCH_POSTS_SUCCESS
        });
    }
    catch (error) {
        dispatch({
            payload: error,
            type: FETCH_POSTS_ERROR
        });
    }
};

const getCategories = async (dispatch) => {
    try {
        dispatch({ type: FETCH_CATEGORIES_REQUEST });
        const categories = await fetchCategories();
        dispatch({
            payload: categories,
            type: FETCH_CATEGORIES_SUCCESS
        });
    }
    catch (error) {
        dispatch({
            payload: error,
            type: FETCH_CATEGORIES_ERROR
        });
    }
};

const filterPosts = (dispatch, category) => {
    //TODO: Maybe it should do again another API call in the future but for 100 posts it's should be fine.
    dispatch({
        type: FILTER_POSTS,
        payload: category
    });
};

export const getActions = (dispatch) => {
    return {
        getPosts: () => getPosts(dispatch),
        getCategories: () => getCategories(dispatch),
        filterPosts: (category) => filterPosts(dispatch, category)
    };
};
