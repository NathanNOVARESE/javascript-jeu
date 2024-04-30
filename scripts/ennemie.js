const ennemieWidth = 10;
const ennemieHeight = 10;

let alienArray = [];
let alienWidth = characterWidth;
let alienHeight = characterHeight;
let alienX = canvas.width;
let alienY = canvas.width;
let alienImg;

let alienRows = 2;
let alienColumns = 3;
let alienCount = 0;

alienImg = new Image(); 
alienImg.src = "./assets/satore.jpg";
spawnAlien();

for (let i = 0; i < alienArray.length; i++) {
    let alien = alienArray[i];
    if (alien.alive) {
        context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height)
    }
}

function  spawnAlien() {
    for (let c = 0; c < alienColumns; c++) {
        for (let r = 0; r < alienRows; r++) {
            let alien = {
                img : alienImg,
                x : alienX + c*alienWidth,
                y : alienY + r*alienHeight,
                width : alienWidth,
                height : alienHeight,
                alive : true
            }
            alienArray.push(alien);
        }
    }
    alienCount = alienArray.lenght;
}