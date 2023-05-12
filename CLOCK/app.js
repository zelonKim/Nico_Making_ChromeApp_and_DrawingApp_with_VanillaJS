/* 
function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 3000); 
*/

/*
function sayHello() {
    console.log("hello");
}

setTimeout(sayHello, 3000); 
*/


/* 
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}

getClock()
setInterval(getClock, 1000); 
*/

const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}: ${minutes}: ${seconds}`;
}

getClock();
setInterval(getClock, 1000);