import React from "react";

//Counter에서 사용할 props의 type 지정하기
type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

const Counter = ({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
}: CounterProps) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
};

export default Counter;
