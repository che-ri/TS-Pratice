import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return (
        <div>
            <div>
                <span> 💻 Greetings</span>
                <Greetings name="cheri" onClick={onClick} />
            </div>
            <div>
                <span> 💻 Counter </span>
                <Counter />
            </div>
        </div>
    );
}

export default App;
