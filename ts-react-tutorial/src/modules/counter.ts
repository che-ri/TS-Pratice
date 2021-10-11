import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

//📌action
//as const 를 사용하면 action.type이 string으로 추론되지않고, 문자열로 추론된다!!
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = createStandardAction(INCREASE)();

export const decrease = createStandardAction(DECREASE)();

//payload에 있는 number값을 원본 state에 더하는 역할
//increaseBy에서 사용할 payload의 type을 generics로 지정한다.
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

//📌action type
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>; //ActionType을 이용하여 모든 액션 객체들의 타입 선언

//📌state type
type CounterState = {
    count: number;
};

//📌initialState
const initialState: CounterState = {
    count: 0,
};

//📌reducer
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;
