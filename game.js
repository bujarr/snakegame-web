// Canvas from the html file.
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let gameIsOver = false;
let size = 2; // Default body size of snake is 2
const grid = 10; // 30 grids per row
let eatenFood = true;
let foodX, foodY;
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = true;

// 900 because 30x30 == 900
const x = new Array(900);
const y = new Array(900);

for (let z = 0; z <= size; z++) {
    x[z] = 40 - z * 10;
    y[z] = 40;
}

// All functions that will continuously be run with a timeout of 100ms.
function cyclic() {
    
    display();
    setTimeout("cyclic()", 100);
}

cyclic();


function gameOverScreen() {
    context.fillStyle = 'white';
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
}

function display() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (gameIsOver) {
        gameOverScreen();

    } else {
        if (eatenFood) {
            putFood();
            eatenFood = false;

        }

        // Colour the food red
        context.beginPath();
        context.fillStyle = "Red";
        context.arc(foodX, foodY, grid / 2, 0, 2 * Math.PI, false);
        context.fill();
        context.closePath();

        // Colour the entire snakes body green
        for (let z = 0; z < size; z++) {
            context.beginPath();
            context.fillStyle = "Green";
            context.arc(x[z], y[z], grid / 2, 0, 2 * Math.PI, false);
            context.fill();
            context.closePath();
        }
    }
}

// Key movement
onkeydown = function (e) {
    const key = e.keyCode;
    if ((key == 37) && (!moveRight)) {
        moveLeft = true;
        moveUp = false;
        moveDown = false;
    }
    if ((key == 39) && (!moveLeft)) {
        moveRight = true;
        moveUp = false;
        moveDown = false;
    }
    if ((key == 38) && (!moveDown)) {
        moveLeft = false;
        moveUp = true;
        moveRight = false;
    }
    if ((key == 40) && (!moveUp)) {
        moveRight = false;
        moveLeft = false;
        moveDown = true;
    }
}