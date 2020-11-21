import {
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS, FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS
} from './actionTypes';

export const initialState = {
    categories: [],
    isLoading: false,
    loading: {
        categories: false,
        posts: false
    },
    error: null,
    posts: []
};

export const rootReducer = (state, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    categories: true
                }
            };
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    posts: true
                }
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                loading: {
                    ...state.loading,
                    categories: false
                },
                error: null
            };
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                categories: [],
                loading: {
                    ...state.loading,
                    categories: false
                },
                error: null
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    posts: false
                },
                posts: action.payload
            };
    }
    return state;
};
