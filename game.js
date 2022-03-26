// Canvas from the html file.
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let gameIsOver = false;
let size = 2; // Default body size of snake is 2
const grid = 10; // 30 grids per row

// 900 because 30x30 == 900
const x = new Array(900);
const y = new Array(900);

// All functions that will continuously be run with a timeout of 100ms.
function cyclic() {

    setTimeout("cyclic()", 100);
}