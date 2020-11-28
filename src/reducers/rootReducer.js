import {
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS, FILTER_POSTS, SET_SEARCH_QUERY
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
    filter: null,
    searchQuery: ''
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
                filter: action.payload
            }
        }
        case SET_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};
