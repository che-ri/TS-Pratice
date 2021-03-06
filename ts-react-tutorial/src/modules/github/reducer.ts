import { createReducer } from "typesafe-actions";
import { GithubState, GithubAction } from "./types";
import {
    GET_USER_PROFILE,
    GET_USER_PROFILE_ERROR,
    GET_USER_PROFILE_SUCCESS,
} from "./actions";

// initialState
const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null,
    },
};

//reducer
const reducer = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: state => ({
        ...state,
        userProfile: {
            loading: true,
            error: null,
            data: null,
        },
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: null,
            data: action.payload,
        },
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: action.payload,
            data: null,
        },
    }),
});

export default reducer;
