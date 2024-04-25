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
    x += vxl + vxr;
    y += vyu + vyd;

    // Mise à jour et dessin des projectiles
    for (let i = 0; i < projectiles.length; i++) {
        const projectile = projectiles[i];
        projectile.update();
        projectile.draw();
    }

    ctx.fillRect(x, y, 10, 10);
    requestAnimationFrame(update);
}



const projectiles = []; // Tableau pour stocker les projectiles

update()