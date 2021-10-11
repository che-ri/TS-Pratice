import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

// 한번에 모두 import 해와서 actions 에 담았기 때문에
// 이 부분이 액션의 종류가 많아져도 한 줄로 작성 할 수 있어서 매우 간편합니다.
export type TodosAction = ActionType<typeof actions>;

//📌state type
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type TodosState = Todo[]; //Todo 객체로 이루어진 배열이다. ex) [{id, text, done},{id,text,done}] 의 형태
