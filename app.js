const canvas = document.querySelector("canvas");
// ctx = context >> 붓 역할
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 3;

const colors = [
    "#1289A7",
    "#FFC312",
    "#C4E538",
    "#F79F1F",
    "#EE5A24",
    "#EA2027",
    "#FDA7DF",
    "#12CBC4",
];

function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);