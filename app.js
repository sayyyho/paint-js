const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 1.5;

let isPainting = false;

function onMove(location) {
    if(isPainting) {
        ctx.lineTo(location.offsetX, location.offsetY);
        ctx.stroke();
        return;
    }
    console.log(location.offsetX, location.offsetY);
    ctx.moveTo(location.offsetX, location.offsetY);
}

function startPaint() {
    isPainting = true ;
}

function cancelPaint() {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPaint);
canvas.addEventListener("mouseup", cancelPaint);
canvas.addEventListener("mouseleave", cancelPaint);