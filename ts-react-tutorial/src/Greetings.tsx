import React from "react";

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string; //옵셔널한 props라면 ? 문자를 사용하면 됩니다.
};

function Greetings({ name, mark, optional }: GreetingsProps) {
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
        </div>
    );
}

Greetings.defaultProps = {
    mark: "!",
};

export default Greetings;
