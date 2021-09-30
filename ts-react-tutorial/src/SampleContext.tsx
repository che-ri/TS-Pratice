import React, { useReducer, useContext, createContext, Dispatch } from "react";

type Color = "red" | "orange" | "yellow";

//state의 타입설정
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

//Reducer에서 사용할 Action 설정
//state에 대한 type도 설정할 수 있다!
type Action =
    | { type: "SET_COUNT"; count: number }
    | { type: "SET_TEXT"; text: string }
    | { type: "SET_COLOR"; color: Color }
    | { type: "TOGGLE_GOOD" };

//dispatch를 위한 타입(Dispatch를 리액트에서 불러올 수 있다.), 액션들의 타입을 Dispatch의 Generics로 설정
type SampleDispatch = Dispatch<Action>;

//Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_COUNT":
            return { ...state, count: action.count }; //count에 올려보면 type이 지정된 것을 확인할 수 있습니다.
        case "SET_TEXT":
            return { ...state, text: action.text }; //text에 올려보면 type이 지정된 것을 확인할 수 있습니다.
        case "SET_COLOR":
            return { ...state, color: action.color }; //color에 올려보면 type이 지정된 것을 확인할 수 있습니다.
        case "TOGGLE_GOOD":
            //toggle은 굳이 action의 값을 사용하지않고 원본 state의 반댓값으로 적용한다.
            return { ...state, isGood: !state.isGood }; //isGood에 올려보면 type이 지정된 것을 확인할 수 있습니다.
        default:
            throw new Error("Unhandled action");
    }
}

//SampleProvider에서 useReducer를 사용하고, SampleStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function SampleProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: "hello",
        color: "red",
        isGood: true,
    });
    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    );
}

//state와 dispatch를 쉽게 사용하기 위한 커스텀 Hooks
export function useSampleState() {
    const state = useContext(SampleStateContext);
    //커스텀 hooks에서는 null 체킹을 해주는 것이 매우 중요하다! 이를 통해 우리가 만든 함수들의 반환값이 언제나 유효하다는 것을 보장 할 수 있다.
    if (!state) throw new Error("Cannot find SampleProvider"); //유효하지않으면 에러를 발생시킨다.
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) throw new Error("Cannot find SampleProvider"); //유효하지않으면 에러를 발생시킨다.
    return dispatch;
}
