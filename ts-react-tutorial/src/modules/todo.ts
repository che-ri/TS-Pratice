import {
    deprecated,
    ActionType,
    createReducer,
    Action,
} from "typesafe-actions";
const { createAction, createStandardAction } = deprecated;

//📌action
//as const 를 사용하면 action.type이 string으로 추론되지않고, 문자열로 추론된다!!
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1; //임시로 사용할 todo의 id값

//📌action creator
export const addTodo = createAction(
    ADD_TODO,
    action => (text: string) =>
        action({
            id: nextId++,
            text,
        })
);
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

//📌action type
const actions = { addTodo, toggleTodo, removeTodo };

type TodosAction = ActionType<typeof actions>;

//📌state type
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type TodosState = Todo[]; //Todo 객체로 이루어진 배열이다. ex) [{id, text, done},{id,text,done}] 의 형태

//📌initialState
const initialState: TodosState = [];

//📌reducer
const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) =>
        state.concat({ ...action.payload, done: false }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter(todo => todo.id !== id),
});

export default todos;
