import { createAsyncAction, deprecated } from "typesafe-actions";
import { AxiosError } from "axios";

//api
import { GithubProfile } from "../../api/github";

const { createStandardAction } = deprecated;
//action
export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR";

//actions creator
// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();

// export const getUserProfileSuccess = createStandardAction(
//     GET_USER_PROFILE_SUCCESS
// )<GithubProfile>();

// export const getUserProfileError = createStandardAction(
//     GET_USER_PROFILE_ERROR
// )<AxiosError>();

//위의 actions creator은 아래처럼 createAsyncAction을 통해 리팩토링 할 수 있습니다.
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();
