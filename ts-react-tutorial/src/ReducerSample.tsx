import React, { useReducer } from "react";

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

const ReducerSample = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: "hello",
        color: "red",
        isGood: true,
    });

    const setCount = () => dispatch({ type: "SET_COUNT", count: 5 });
    const setText = () => dispatch({ type: "SET_TEXT", text: "bye" });
    const setColor = () => dispatch({ type: "SET_COLOR", color: "orange" });
    const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? "true" : "false"}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    );
};

export default ReducerSample;
