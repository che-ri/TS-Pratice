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
