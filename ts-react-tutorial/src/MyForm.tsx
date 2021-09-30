import React, { useState } from "react";

type MyFormProps = {
    //컴포넌트의 props 타입설정
    onSubmit: (form: { name: string; description: string }) => void;
};

const MyForm = ({ onSubmit }: MyFormProps) => {
    const [form, setForm] = useState({
        name: "",
        description: "",
    });

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //파라미터타입설정
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //파라미터타입설정
        e.preventDefault();
        onSubmit(form); //부모컴포넌트로 받아온 함수 실행
        setForm({
            name: "",
            description: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
};

export default MyForm;
