import {
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS, FILTER_POSTS
} from './actionTypes';
import { FrequencyTable } from '../searchUtil';

export const initialState = {
    categories: [],
    isLoading: false,
    loading: {
        categories: false,
        posts: false
    },
    error: null,
    posts: [],
    selectedCategory: null,
    search: null
};

export const rootReducer = (state, action) => {
    switch (action.type) { // Refactor to be on value
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
            };
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
            const search = new FrequencyTable(action.payload);
            return {
                ...state,
                loading: {
                    ...state.loading,
                    posts: false
                },
                posts: action.payload
            };
        case FILTER_POSTS:{
            return {
                ...state,
                selectedCategory: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};
