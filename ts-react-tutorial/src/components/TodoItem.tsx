import React, { CSSProperties } from "react";
import { Todo } from "../modules/todo";

type TodoItemProps = {
    todo: Todo; //type을 모듈에서 꺼내서 사용
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
    // CSSProperties 는 style 객체의 타입입니다.
    const textStyle: CSSProperties = {
        textDecoration: todo.done ? "line-through" : "none",
    };
    const removeStyle: CSSProperties = {
        marginLeft: 8,
        color: "red",
        cursor: "pointer",
    };

    const handleToggle = () => onToggle(todo.id);
    const handleRemove = () => onRemove(todo.id);

    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>
                {todo.text}
            </span>
            <span onClick={handleRemove} style={removeStyle}>
                (X)
            </span>
        </li>
    );
};

export default TodoItem;
