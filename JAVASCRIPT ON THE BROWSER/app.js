/* 
title = document.querySelector("#hello")

title.style.color = 'green' // 요소의 글자색을 초록색으로 바꿈.

console.dir(title) 
*/


/* 
title = document.querySelector("#hello")

function handleTitleClick() {
    console.log("title was clicked!")
}

title.addEventListener("click", handleTitleClick)  
*/


/* 
title = document.querySelector("#hello")

function handleTitleClick() {
    title.style.color = "green"
}

title.addEventListener("click", handleTitleClick) 
*/

/* 
title = document.querySelector("#hello")

function handleMouseEnter() {
    console.log("mouse is here!");
}

title.addEventListener("mouseenter", handleMouseEnter); 
*/

/*
 title = document.querySelector("#hello")

function handleTitleClick() {
    console.log("title was clicked!")
}

title.onclick = handleTitleClick
 */


/* 
title = document.querySelector("#hello")

function handleMouseEnter() {
    console.log("mouse is here!");
}

title.onmouseenter = handleMouseEnter;
*/

/* 
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);
*/

/* 
function handleWindowCopy() {
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy)
*/

function handleWindowOffline() {
    alert("no Wifi");
}

window.addEventListener("offline", handleWindowOffline)