//📌action
//as const 를 사용하면 action.type이 string으로 추론되지않고, 문자열로 추론된다!!
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = () => ({
    type: INCREASE,
});

export const decrease = () => ({
    type: DECREASE,
});

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff,
});

//📌action type
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

//📌state type
type CounterState = {
    count: number;
};

//📌initialState
const initialState: CounterState = {
    count: 0,
};

//📌reducer
function counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch (action.type) {
        //case를 적고, ctrl+space를 하면 action 선언시 as const로 설정한 action들이 자동으로 뜬다.
        case "counter/INCREASE":
            return { count: state.count + 1 };
        case "counter/DECREASE":
            return { count: state.count - 1 };
        case "counter/INCREASE_BY":
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;
