const canvas = document.querySelector("canvas");
// ctx = context >> 붓 역할
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;


ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill(); //fill or stroke
ctx.beginPath(); // new path 이전 작업을 끝내고 새로운 특성을 도입하기 위해서.
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();