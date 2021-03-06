import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import GithubUsernameForm from "../components/GithubUsernameForm";
import GithubProfileInfo from "../components/GithubProfileInfo";
import { getUserProfileThunk } from "../modules/github";

const GithubProfileLoader = () => {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.github.userProfile
    );
    const dispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        dispatch(getUserProfileThunk(username));
    };

    return (
        <>
            <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
            {loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
            {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
            {data && (
                <GithubProfileInfo
                    bio={data.bio}
                    blog={data.blog}
                    name={data.login}
                    thumbnail={data.avatar_url}
                />
            )}
        </>
    );
};

export default GithubProfileLoader;
