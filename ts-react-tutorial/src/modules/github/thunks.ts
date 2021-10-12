import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GithubAction } from "./types";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";

// ThunkAction의 Generics 설정
// 1. TReturnType: thunk 함수에서 반환하는 값의 타입을 설정합니다. return 값이 없으면 async이므로, Promise<void>로 사용합니다.
// 2. TState: 스토어의 상태에 대한 타입을 설정합니다.
// 3. TExtraThunkArg: redux-thunk 미들웨어의 Extra Argument의 타입을 설정합니다.
// 4. TBasicAction: dispatch 할 수 있는 액션들의 타입을 설정합니다.

export function getUserProfileThunk(
    username: string
): ThunkAction<void, RootState, null, GithubAction> {
    return async dispatch => {
        const { request, success, failure } = getUserProfileAsync;
        dispatch(request());
        try {
            const userProfile = await getUserProfile(username);
            dispatch(success(userProfile));
        } catch (e: any) {
            dispatch(failure(e));
        }
    };
}
