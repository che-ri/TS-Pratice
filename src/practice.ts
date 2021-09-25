//1. 변수에서 타입 정의하기
let count = 0;
count += 1;
// count = "갑자기 분위기 문자열"; //숫자로 선언되었던 count를 문자열로 업데이트하면 에러난다!
const message: string = "hello world"; //문자열
const done: boolean = true; //불리언 값
const numbers: number[] = [1, 2, 3]; //숫자 배열
const messages: string[] = ["hello", "world"]; //문자열 배열
// messages.push(1); //숫자를 넣으려고 하면 안된다!
let mightBeUndefined: string | undefined = undefined; // string 또는 undefined
let nullableNumber: number | null = null; // number 또는 null
let color: "red" | "orange" | "yellow" = "red"; // 'red', 'orange', 'yellow' 중 하나
color = "yellow";
// color = "green"; //에러 발생!
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
//3. interface 사용하기
//interface는 타입을 정의한 규칙이며, 클래스, 객체를 위한 타입을 지정할 때 사용되는 문법이다.
//3-1 클래스에서 interface사용하기
interface Shape {
    getArea(): number; //Shape interface에서 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 number이다.
}
class Circle implements Shape {
    //'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.
    constructor(public radius: number) {} //constructor 파라미터에 접근 제한자를 선언하면 암묵적으로 클래스프로퍼티선언이 이루어진다. public은 외부에서 참조가능
    //너비를 가져오는 함수를 구현합니다. getArea라는 함수를 만들지 않는다면 오류가 생긴다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    //constructor 파라미터에 접근 제한자를 선언하면 암묵적으로 클래스프로퍼티선언이 이루어진다. private은 클래스 내부와 상속된 곳에서만 참조가능
    getArea() {
        return this.width * this.height;
    }
}
//아래처럼 타입 지정가능
const circle = new Circle(5);
//함수처럼 구현가능
function getCircleArea(circle: Circle) {
    return circle.getArea();
}
//Shape라는 인터페이스배열로 이루어지게 타입 지정가능
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => console.log(shape.getArea())); //이렇게 내부에 있는 getArea() 사용가능
//3-2 객체에서 interface 사용하기
interface Person {
    name: string;
    age?: number; //?은 옵셔널체이닝이다. 선택적 설정값이다.
}
// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }
// 위의 코드에서 Developer 인터페이스는 Person 인터페이스와 구조가 비슷하므로 아래처럼 extend 구문을 활용할 수 있다.
interface Developer extends Person {
    skills: string[];
}
const person: Person = {
    name: "지영",
    age: 28, //옵셔널체이닝이 걸린 프로퍼티를 사용하면 타입값에 undefined도 추가된다. 따라서 age의 타입은 number | undefined 이다.
};
const expert: Developer = {
    name: "셰리",
    skills: ["javascript", "react"],
};
//4. Type Alias 사용하기
//type은 특정 타입에 별칭을 붙이는 용도로 사용합니다.
type PersonType = {
    name: string;
    age?: number;
};
//&은 교차타입(intersection Type)으로서 두개 이상의 타입을 합쳐줍니다.
type DeveloperType = PersonType & {
    skills: string[];
};
const person2: PersonType = {
    name: "지영",
};
const expert2: DeveloperType = {
    name: "셰리",
    skills: ["javascript", "react"],
};
type PeopleType = PersonType[]; // PersonType[] 를 이제 앞으로 PeopleType 이라는 타입으로 사용 할 수 있습니다.
const people: PeopleType = [person2, expert2]; //콘솔 찍으면 array object로 나온다.
type Color = "red" | "orange" | "yellow";
const redColor: Color = "red";
const colors: Color[] = ["red", "orange"];
//5. Generics 사용하기
//제너릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type alias 를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.
//https://joshua1988.github.io/ts/guide/generics.html#%EC%A0%9C%EB%84%A4%EB%A6%AD%EC%9D%98-%ED%95%9C-%EC%A4%84-%EC%A0%95%EC%9D%98%EC%99%80-%EC%98%88%EC%8B%9C
//5-1. 함수에서 Generics 사용하기
//아래와 같은 상황에서 Generics를 사용할 수 있습니다
// function merge(a: any, b: any): any {
//     return {
//         ...a,
//         ...b,
//     };
// }
// const merged = merge({ foo: 1 }, { bar: 1 });
//위의 코드는 아래처럼 구현할 수 있습니다.
function merge<A, B>(a: A, b: B): A & B {
    return { ...a, ...b };
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap<T>(param: T) {
    return {
        param, //return 축약형을 쓰면 타입이 찍히지 않는다.
    };
}
const wrapped = wrap(10);

//5-2. interface에서 generics사용하기
interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ["a", "b", "c"],
};

//5-3. type에서 generics 사용하기
type ItemsType<T> = {
    list: T[];
};

const itemsUsingType: ItemsType<string> = {
    list: ["a", "b", "c"],
};

//5-4. class에서 generics 사용하기
class Queue<T> {
    list: T[] = [];

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
