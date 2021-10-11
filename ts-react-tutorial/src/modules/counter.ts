import { deprecated, ActionType, createReducer } from "typesafe-actions";
const { createStandardAction } = deprecated;

//📌action creator
//reducer을 메서드체이닝으로 구현+handleAction의 첫번째 인자를 action creator로 넣는다면 action을 작성하지 않고, action creator 안에 바로 액션타입을 지정해줘도 됩니다!
export const increase = createStandardAction("counter/INCREASE")();
export const decrease = createStandardAction("counter/DECREASE")();
//payload에 있는 number값을 원본 state에 더하는 역할
//increaseBy에서 사용할 payload의 type을 generics로 지정한다.
export const increaseBy = createStandardAction("counter/INCREASE_BY")<number>();

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
//객체형태가 아니라 메서드체이닝으로도 reducer을 작성할 수 있습니다. 이 방법을 사용하면 handleAction의 첫번째 인자에 action이 아니라 action Creator을 넣을 수 있습니다.
const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, state => ({ count: state.count + 1 }))
    .handleAction(decrease, state => ({ count: state.count - 1 }))
    .handleAction(increaseBy, (state, action) => ({
        count: state.count + action.payload,
    }));

export default counter;
