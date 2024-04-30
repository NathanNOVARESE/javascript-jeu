console.log("Main.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let x = canvas.width/2-5;
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
        // Mise à jour et dessin des projectiles
        for (let i = 0; i < projectiles.length; i++) {
            const projectile = projectiles[i];
            projectile.update();
            projectile.draw();
        }
    
        ctx.fillRect(x, y, 10, 10);
        requestAnimationFrame(update);

}

var timer;
var ele = document.getElementById('timer');

(function () {
    var sec = 0;
    timer = setInterval(() => {
        var minutes = Math.floor(sec / 60);
        var seconds = sec % 60;
        ele.innerHTML = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        sec++;
    }, 1000); // chaque 1 seconde
})();


const projectiles = []; // Tableau pour stocker les projectiles

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    const validKeys = ['z', 'q', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'];
  
    if (key === ' ') {
      event.preventDefault(); // Empêche le défilement de la page lorsque la barre d'espace est utilisée
      document.getElementById('space').style.backgroundColor = "yellow";
    } else if (validKeys.includes(key)) {
      event.preventDefault(); // Empêche le défilement de la page lors de l'utilisation des touches fléchées
      document.getElementById(key).style.backgroundColor = "yellow";
    }
  });
  
  document.addEventListener("keyup", function(event) {
    const key = event.key.toLowerCase();
    const validKeys = ['z', 'q', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'];
  
    if (key === ' ') {
      document.getElementById('space').style.backgroundColor = "black";
    } else if (validKeys.includes(key)) {
      document.getElementById(key).style.backgroundColor = "black";
    }
  });
  
  
  
  
  

update()