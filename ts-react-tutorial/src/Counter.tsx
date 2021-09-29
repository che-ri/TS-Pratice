import React, { useState } from "react";

const Counter = () => {
    //useState에서 타입을 설정하려면 Generics를 이용한다. ex) useState<type명>()

    //아래와 같은 경우에는 <number>처럼 Generics를 입력하지 않더라도 타입유추가 가능하기에 생략해도된다.
    const [count, setCount] = useState<number>(0);

    //하지만 아래처럼 타입이 null일 수도 있고, 아닐수도 있을 때에 Generics를 사용하면 좋다.
    type Information = { name: string; description: string };
    const [info, setInformation] = useState<Information | null>(null);

    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;
