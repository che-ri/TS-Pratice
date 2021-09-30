import React, { useReducer } from "react";

//사용할 액션들을 |을 이용하여 나열한다.
type Action = { type: "INCREASE" } | { type: "DECREASE" };

//redux처럼 state와 action을 넣어주고 액션 case마다 함수를 정의해준다.
function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error("Unhandled action");
    }
}

const Counter = () => {
    //useReducer 사용법
    //const [state, dispatch] = useReducer(reducer, initialArg, init);
    const [count, dispatch] = useReducer(reducer, 0);

    //실행할 액션를 넘겨줍니다.
    const onIncrease = () => dispatch({ type: "INCREASE" });
    const onDecrease = () => dispatch({ type: "DECREASE" });

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;
