import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";
import CounterContainer from "./containers/CounterContainer";

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };

    const onSubmit = (form: { name: string; description: string }) =>
        console.log(form);

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
            <div>
                <span> 💻 MyForm </span>
                <MyForm onSubmit={onSubmit} />
            </div>
            <div>
                <span> 💻 ReducerSample </span>
            </div>
            <SampleProvider>
                <ReducerSample />
            </SampleProvider>
            <div>
                <CounterContainer />
            </div>
        </div>
    );
}

export default App;
