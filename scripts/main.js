console.log("Main.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let x = 43.5;
let y = 125;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd =0;
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += vxl ;
    x += vxr ;
    y += vyu ;
    y += vyd ;
    ctx.fillRect(x, y, 10, 10)
    requestAnimationFrame(update)
}
update()