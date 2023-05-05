/*
const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b)
    },
    multi: function(a, b) {
        console.log(a * b)
    }
};
console.log(calculator.add(10,20)) // 출력: 30  undefined
*/

/*
const myAge = 56;
function calculateKoreanAge(ageOfForeigner) {
    ageOfForeigner + 2;
}
const koreanAge = calculateKoreanAge(myAge)
console.log(koreanAge) // 출력: undefined
*/

/*
const myAge = 56;
function calculateKoreanAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const koreanAge = calculateKoreanAge(myAge)
console.log(koreanAge) // 출력: 58
*/

/*
const myAge = 56;
function calculateKoreanAge(ageOfForeigner) {
    ageOfForeigner + 2;
    return "hello"
}
const koreanAge = calculateKoreanAge(myAge)
console.log(koreanAge) // 출력: hello
*/

/*
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b
    },
    multi: function(a, b) {
        return a * b
    }
};
const plusResult = calculator.add(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.multi(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);

console.log(plusResult)  // 출력: 5
console.log(minusResult) // 출력: -5
console.log(timesResult) // 출력: -50
console.log(divideResult) // 출력: -10
*/

/*
const calcuator = {
    add: function(a, b) {
        console.log(a + b);
    }
};

calcuator.add(10,20)  // 출력: 30
console.log(calcuator.add(10,20))
*/

/*
const calculator = {
    add: function(a, b) {
        console.log("hello")
        return a + b;
        console.log("bye bye")
    }
};
const result = calculator.add(10, 20)
console.log(result)  // 출력: hello  30
*/

const calculator = {
    add: function(a, b) {
        console.log("bye bye")
        return a + b;
        console.log("hello")
    }
};
const result = calculator.add(10, 20)
console.log(result)  // 출력: bye bye 30