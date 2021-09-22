//1. 변수에서 타입 정의하기
let count = 0;
count += 1;
count = "갑자기 분위기 문자열"; //숫자로 선언되었던 count를 문자열로 업데이트하면 에러난다!

const message: string = "hello world"; //문자열

const done: boolean = true; //불리언 값

const numbers: number[] = [1, 2, 3]; //숫자 배열
const messages: string[] = ["hello", "world"]; //문자열 배열

messages.push(1); //숫자를 넣으려고 하면 안된다!

let mightBeUndefined: string | undefined = undefined; // string 또는 undefined
let nullableNumber: number | null = null; // number 또는 null

let color: "red" | "orange" | "yellow" = "red"; // 'red', 'orange', 'yellow' 중 하나
color = "yellow";
color = "green"; //에러 발생!

//2. 함수에서 타입 정의하기
function sum(x: number, y: number): number {
    //매개변수 x는 number, y는 number 그리고 결과값은 number이라고 명시하였다.
    // return null; 을 하면 결과값이 number이 아니니 오류가 난다!
    return x + y;
}

sum(1, 2);

function sumArray(number: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur, 0); //acc, cur에 커서를 올려보면 타입 유추가 되어 편리하다!
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
    //아무것도 반환하지 않아야 한다면 void로 명시한다.
    console.log("I am just saying hello world");
}
