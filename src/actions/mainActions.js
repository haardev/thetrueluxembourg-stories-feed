import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from '../reducers/actionTypes';
import { fetchPosts } from '../apiUtils';

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

    }
    catch (error) {

    }
}

export const getActions = (dispatch) => {
    return {
        getPosts: () => getPosts(dispatch),
        getCategories: () => getCategories(dispatch),
    };
};
