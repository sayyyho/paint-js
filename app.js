const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width")
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

const onMove = (location) => {
    if(isPainting) {
        ctx.lineTo(location.offsetX, location.offsetY);
        ctx.stroke();
        return;
    }
    // console.log(location.offsetX, location.offsetY);
    ctx.moveTo(location.offsetX, location.offsetY);
}

const startPaint = () => isPainting = true;

const cancelPaint = () => {
    isPainting = false;
    ctx.beginPath();
}

const onLineWidthChange = (event) => ctx.lineWidth = event.target.value;    

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPaint);
canvas.addEventListener("mouseup", cancelPaint);
canvas.addEventListener("mouseleave", cancelPaint);

lineWidth.addEventListener("change", onLineWidthChange);