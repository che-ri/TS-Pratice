"use strict";
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
