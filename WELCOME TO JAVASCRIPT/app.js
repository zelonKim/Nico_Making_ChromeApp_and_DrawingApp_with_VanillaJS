const age = parseInt(prompt("How old are you?")); // 글자(문자)를 입력할 경우 parseInt()는 NaN을 반환함.

if(isNaN(age)) { // isNaN()은 age가 NaN일 경우, true를 반환함. 반면, NaN이 아닐 경우, false를 반환함.
    console.log("plz write a number.") // 글자(문자)를 입력할 경우 출력함.
} else {
    console.log("Thanks for writing your age.") // 숫자를 입력할 경우 출력함.
}

// 입력: 28      // 출력: Thanks for writing your age.
// 입력: 김성진  // 출력: plz write a number.