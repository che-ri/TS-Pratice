import { deprecated } from "typesafe-actions";
const { createAction, createStandardAction } = deprecated;

//📌action
//as const 를 사용하면 action.type이 string으로 추론되지않고, 문자열로 추론된다!!
export const ADD_TODO = "todos/ADD_TODO" as const;
export const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
export const REMOVE_TODO = "todos/REMOVE_TODO" as const;

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
