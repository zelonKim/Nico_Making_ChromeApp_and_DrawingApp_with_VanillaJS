const elem = document.getElementById("hello") // HTML에서 id="hello"인 요소를 찾아서 가져옴.
console.log(elem) // 출력: <h1 id="hello">Grab me</h1>

elem.innerText = "how are you" // <h1 id="hello">how are you</h1>로 바꿔줌.

console.log(elem.id)  // "hello"
console.log(elem.className) // "niceToMeetYa"