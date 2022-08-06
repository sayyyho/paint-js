const canvas = document.querySelector("canvas");
// ctx = context >> 붓 역할
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 10, 100); //arm1
ctx.fillRect(300, 200, 10, 100); //arm2
ctx.fillRect(225, 180 + 15, 60, 150); //body

ctx.arc(255,150,30,0,Math.PI*2);
ctx.fill()
ctx.beginPath();
ctx.arc(240,145,5,Math.PI,Math.PI * 2);
ctx.arc(270,145,5,Math.PI,Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();