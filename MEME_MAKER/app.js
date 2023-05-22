const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;


/*
ctx.rect(50, 50, 100, 100)
ctx.rect(150, 150, 100, 100)
ctx.rect(250, 250, 100, 100)
// ctx.stroke(); // 선만 나타남.
ctx.fill(); // 색이 칠해짐.

ctx.beginPath(); // 새 경로를 만듦.
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
*/

/* 
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill() 
*/

/* ctx.fillRect(200, 200, 50, 200)
ctx.fillRect(400, 200, 50, 200)
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100)
ctx.fillRect(200, 200, 200, 20)
ctx.moveTo(200,200)
ctx.lineTo(325, 100)
ctx.lineTo(450, 200)
ctx.fill();
 */

/* 
ctx.fillRect(200 - 40, 200 - 10, 15, 100)
ctx.fillRect(350 - 40, 200 - 10, 15, 100)
ctx.fillRect(260 - 40, 200 - 10, 60, 200)

ctx.arc(250, 100, 50, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red"
ctx.arc(260 + 10, 80, 8, 0, 2 * Math.PI);
ctx.arc(220 + 10, 80, 8, 0, 2 * Math.PI);
ctx.fill(); 
*/

const colors = [

]

function onClick(event){
    ctx.moveTo(0, 0)
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick)