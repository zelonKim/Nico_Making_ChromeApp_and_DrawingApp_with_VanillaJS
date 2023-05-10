/* 
h1 = document.querySelector(".hello h1")

function handleTitleClick() {
    if (h1.style.color === "blue") {
        h1.style.color = "tomato";
    } else {
        h1.style.color = "blue"
    }
}

h1.addEventListener("click", handleTitleClick);
*/
/* 
h1 = document.querySelector(".hello h1")

function handleTitleClick() {
    h1.className = "active"; // h1요소의 class를 "active"로 바꿈.
}
// CSS 파일
//   .active {
//    color: tomato;
//     }

h1.addEventListener("click", handleTitleClick)
*/

//----------------------


/* 
const h1 = document.querySelector(".hello h1")
console.log(h1) // <h1 class="niceToMeetU">Grab me</h1>

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = "niceToMeetU";
        console.log(h1) // <h1 class="niceToMeetU">Grab me</h1>
    } else {
        h1.className = clickedClass;  // 원래 있던 niceToMeetU 클래스는 제거됨.
        console.log(h1)  // <h1 class="clicked">Grab me</h1>
    }
}
h1.addEventListener("click", handleTitleClick) 
*/


/*
const h1 = document.querySelector(".hello h1")
console.log(h1) // <h1 class="niceToMeetU">Grab me</h1>

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
        console.log(h1) // <h1 class="niceToMeetU">Grab me</h1>
    } else {
        h1.classList.add(clickedClass);  // 원래 있던 niceToMeetU 클래스가 유지됨.
        console.log(h1) // <h1 class="niceToMeetU clicked">Grab me</h1>
    }
}

h1.addEventListener("click", handleTitleClick) 
*/


//요소.classList.toggle("클래스명")은 위 코드와 똑같이 동작함.
const h1 = document.querySelector(".hello h1")
console.log(h1) // <h1 class="niceToMeetU">Grab me</h1>

function handleTitleClick() {
    h1.classList.toggle("clicked");
        console.log(h1) // <h1 class="niceToMeetU clicked">Grab me</h1>
    }

h1.addEventListener("click", handleTitleClick) 
