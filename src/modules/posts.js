import * as postsAPI from '../api/posts'

// action type
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// action creator

// side effects(thunk)
export const getPosts = () => async dispatch => {
    dispatch({type: GET_POSTS});
    try {
        const posts = await postsAPI.getPosts();
        dispatch({type: GET_POSTS_SUCCESS, posts});
    } catch (e) {
        dispatch({type: GET_POSTS_ERROR, error: e});
    }
};

export const getPost = id => async dispatch => {
    dispatch({type: GET_POST});
    try {
        const post = await postsAPI.getPostById(id);
        dispatch({type: GET_POST_SUCCESS, post});
    } catch (e) {
        dispatch({type: GET_POST_ERROR, error: e});
    }
};

// initial state
const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    },
    post: {
        loading: false,
        data: null,
        error: null
    }
}

// reducer
export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.posts,
                    error: null
                }
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        case GET_POST:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    loading: false,
                    data: action.post,
                    error: null
                }
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}