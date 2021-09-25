"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1. 변수에서 타입 정의하기
var count = 0;
count += 1;
// count = "갑자기 분위기 문자열"; //숫자로 선언되었던 count를 문자열로 업데이트하면 에러난다!
var message = "hello world"; //문자열
var done = true; //불리언 값
var numbers = [1, 2, 3]; //숫자 배열
var messages = ["hello", "world"]; //문자열 배열
// messages.push(1); //숫자를 넣으려고 하면 안된다!
var mightBeUndefined = undefined; // string 또는 undefined
var nullableNumber = null; // number 또는 null
var color = "red"; // 'red', 'orange', 'yellow' 중 하나
color = "yellow";
// color = "green"; //에러 발생!
//2. 함수에서 타입 정의하기
function sum(x, y) {
    //매개변수 x는 number, y는 number 그리고 결과값은 number이라고 명시하였다.
    // return null; 을 하면 결과값이 number이 아니니 오류가 난다!
    return x + y;
}
sum(1, 2);
function sumArray(number) {
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0); //acc, cur에 커서를 올려보면 타입 유추가 되어 편리하다!
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    //아무것도 반환하지 않아야 한다면 void로 명시한다.
    console.log("I am just saying hello world");
}
var Circle = /** @class */ (function () {
    //'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.
    function Circle(radius) {
        this.radius = radius;
    } //constructor 파라미터에 접근 제한자를 선언하면 암묵적으로 클래스프로퍼티선언이 이루어진다. public은 외부에서 참조가능
    //너비를 가져오는 함수를 구현합니다. getArea라는 함수를 만들지 않는다면 오류가 생긴다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    //constructor 파라미터에 접근 제한자를 선언하면 암묵적으로 클래스프로퍼티선언이 이루어진다. private은 클래스 내부와 상속된 곳에서만 참조가능
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
//아래처럼 타입 지정가능
var circle = new Circle(5);
//함수처럼 구현가능
function getCircleArea(circle) {
    return circle.getArea();
}
//Shape라는 인터페이스배열로 이루어지게 타입 지정가능
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) { return console.log(shape.getArea()); }); //이렇게 내부에 있는 getArea() 사용가능
var person = {
    name: "지영",
    age: 28, //옵셔널체이닝이 걸린 프로퍼티를 사용하면 타입값에 undefined도 추가된다. 따라서 age의 타입은 number | undefined 이다.
};
var expert = {
    name: "셰리",
    skills: ["javascript", "react"],
};
var person2 = {
    name: "지영",
};
var expert2 = {
    name: "셰리",
    skills: ["javascript", "react"],
};
var people = [person2, expert2]; //콘솔 찍으면 array object로 나온다.
var redColor = "red";
var colors = ["red", "orange"];
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
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param: param,
    };
}
var wrapped = wrap(10);
var items = {
    list: ["a", "b", "c"],
};
var itemsUsingType = {
    list: ["a", "b", "c"],
};
