//📌action
//as const 를 사용하면 action.type이 string으로 추론되지않고, 문자열로 추론된다!!
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1; //임시로 사용할 todo의 id값

//📌action creator
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text,
    },
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id,
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id,
});

//📌action type
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>;

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
function todos(
    state: TodosState = initialState,
    action: TodosAction
): TodosState {
    switch (action.type) {
        //case를 적고, ctrl+space를 하면 action 선언시 as const로 설정한 action들이 자동으로 뜬다.
        case "todos/ADD_TODO":
            return state.concat({
                //payload안에 있는 값들이 모두 유추가 된다!
                id: action.payload.id,
                text: action.payload.text,
                done: false,
            });
        case "todos/TOGGLE_TODO":
            //payload가 number인 것이 유추된다
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case "todos/REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default todos;
