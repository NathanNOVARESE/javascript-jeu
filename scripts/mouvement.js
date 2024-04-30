class Projectile {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = 5 ; // Taille du projectile
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        ctx.fillStyle = "black"; // Couleur du projectile
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}


addEventListener("keydown", function(e){
    if (e.code == 'KeyD') vxr = 1;
    if (e.code == 'KeyA') vxl = -1;
    if (e.code == 'KeyW') vyu = -1;
    if (e.code == 'KeyS') vyd = 1;
    if (e.code == 'ArrowRight') vxr = 1;
    if (e.code == 'ArrowLeft') vxl = -1;
    if (e.code == 'ArrowUp') vyu = -1;
    if (e.code == 'ArrowDown') vyd = 1;
    console.log(e.code)
    if (e.code == 'Space') { 
        const projectile = new Projectile(x+2.5, y, 0, -2); 
        projectiles.push(projectile); // Ajout du projectile au tableau
    }
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyD') vxr = 0;
    if (e.code == 'KeyA') vxl = 0;
    if (e.code == 'KeyW') vyu = 0;
    if (e.code == 'KeyS') vyd = 0;
    if (e.code == 'ArrowRight') vxr = 0;
    if (e.code == 'ArrowLeft') vxl = 0;
    if (e.code == 'ArrowUp') vyu = 0;
    if (e.code == 'ArrowDown') vyd = 0;
})