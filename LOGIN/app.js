/* 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log(loginInput.value); // value프로퍼티로 input에 입력된 값을 가져옴.
    console.log("clicked");
}

loginButton.addEventListener("click", onLoginBtnClick); 
*/

/*
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const userName = loginInput.value;
    if (userName === "") {
        alert("Please write your name");
    } else if (userName.length > 15) {
        alert("your name is too long.")
    } else {
        alert("you name is right.")
    }
}
loginButton.addEventListener("click", onLoginBtnClick);
*/

/* 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit() {
    const userName = loginInput.value;
   console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);
// <form>에서 submit이벤트가 발생하면 <input>에 입력된 값을 출력함. 
*/


/* 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(e) {
    e.preventDefault(); // 기본 동작으로서 submit할 때 새로고침 되는 현상을 막아줌.
    console.log(e);  //SubmitEvent객체가 출력됨.
}

loginForm.addEventListener("submit", onLoginSubmit); 
*/



/* 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

loginForm.addEventListener("submit", (e) => { // addEventListener의 콜백 함수에서 첫번째 매개변수는 발생한 이벤트에 대한 정보를 담고 있음. 
    e.preventDefault(); 
    console.log(e);  
});
*/

/* 
const link = document.querySelector("a");

function handleLinkClick(e) {
    e.preventDefault(); // 기본 동작(<a>태그의 링크된 페이지로 이동하는 것)을 막아줌.
    console.log(e);
}

link.addEventListener("click", handleLinkClick);
 */

/* 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(e) {
    e.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(userName);
}
loginForm.addEventListener("submit", onLoginSubmit); 
// 로그인 폼을 제출하면 로그인 폼이 사라지고, 입력했던 유저네임이 콘솔창에 출력됨.
 */


/* 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting") // <h1>태그를 가져옴.

function paintGreetings(username) { // 유저네임을 <h1>태그에 보여주는 함수
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    localStorage.setItem("UserName",userName); // 로컬 스토리지에 key와 value로 저장함.
    paintGreetings(userName)
}

const savedUserName = localStorage.getItem("UserName")
console.log(savedUserName) // UserName키의 값이 없을 경우, null이 출력됨.

if (savedUserName === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName)
} 
*/


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting") // <h1>태그를 가져옴.

username = localStorage.getItem("UserName")

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("UserName",loginInput.value); // 로컬 스토리지에 key와 value로 저장함.
    paintGreetings()
}

function paintGreetings() { // 유저네임을 <h1>태그에 보여주는 함수
    username = localStorage.getItem("UserName")
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

if (username === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings()
}


