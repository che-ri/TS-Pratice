import React from "react";

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string; //옵셔널한 props라면 ? 문자를 사용하면 됩니다.
    onClick: (name: string) => void; //void를 리턴타입에 사용하면 아무것도 리턴하지 않는다고 지정하는 것입니다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

Greetings.defaultProps = {
    mark: "!",
};

export default Greetings;
