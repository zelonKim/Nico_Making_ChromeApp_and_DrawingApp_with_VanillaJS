/*
const age = parseInt(prompt("How old are you?")); // 글자(문자)를 입력할 경우 parseInt()는 NaN을 반환함.

if(isNaN(age)) { // isNaN()은 age가 NaN일 경우, true를 반환함. 반면, NaN이 아닐 경우, false를 반환함.
    console.log("plz write a number.") // 글자(문자)를 입력할 경우 출력함.
} else {
    console.log("Thanks for writing your age.") // 숫자를 입력할 경우 출력함.
}
// 입력: 김성진  // 출력: plz write a number.
// 입력: 28      // 출력: Thanks for writing your age.
*/

/*
const age = parseInt(prompt("How old are you?"));

if(isNaN(age)) {
    console.log("plz write a number.")
} else if (age < 20) {
    console.log("You are too young to drink")
} else {
    console.log("You can drink")
}

// 입력: 김성진  // 출력: plz write a number.
// 입력: 15  // 출력: You are too young to drink
// 입력: 25  // 출력: You can drink
*/

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age <0 ) {
    console.log("plz write a positive number.")
} else if (age < 20) {
    console.log("You are too young to drink")
} else if (age < 60) {
    console.log("You can drink")
} else if ( age < 80) {
    console.log("You shouldn`t drink.")
} else {
    console.log("You are too old to drink")
} 

// 입력: 20  // 출력: "You can drink."
// 입력: 60  // 출력: "You shouldn`t drink."
// 입력: 80  // 출력: "You are too old to drink."