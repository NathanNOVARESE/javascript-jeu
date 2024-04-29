console.log("Main.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let x = 100.5;
let y = 125;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd =0;
const characterWidth = 10;
const characterHeight = 10;

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    x += vxl + vxr;
    y += vyu + vyd;

    if (x < 0) {
        x = 0;
    } else if (x + characterWidth > canvas.width) {
        x = canvas.width - characterWidth;
    }

    if (y < 0) {
        y = 0;
    } else if (y + characterHeight > canvas.height) {
        y = canvas.height - characterHeight;
    }

    ctx.fillRect(x, y, characterWidth, characterHeight);

    requestAnimationFrame(update);
}


update()