let s;
let ratioThingy = 20;
let food;
let dir;
let score = 0;
let scores = [0, 0];
let spd = 240;
let timeSinceTurn;
// comment
function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(spd / ratioThingy);
    pickLocation();
}

function pickLocation() {
    let cols = floor(width / ratioThingy);
    let rows = floor(height / ratioThingy);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(ratioThingy);
}

function draw() {
    background(51);
    if (s.eat(food)) {
        pickLocation();
        drawScore();
    }
    s.death();
    s.update();
    s.show();
    fill(255, 0, 50);
    rect(food.x, food.y, ratioThingy, ratioThingy);
    drawScore();
}

function drawScore() {
    textSize(20)
    text('Current score: ' + score, 15, 25)
    let highScore = largest = scores.sort((a, b) => a - b).reverse()[0];
    text('High score: ' + (highScore), 15, 45)
}

function keyPressed() {
    if ((keyCode === UP_ARROW || keyCode === 87) && dir != 'down') {
        s.laDireccion(0, -1);
        dir = 'up';
    } else if ((keyCode === DOWN_ARROW || keyCode === 83) && dir != 'up') {
        s.laDireccion(0, 1);
        dir = 'down';
    } else if ((keyCode === RIGHT_ARROW || keyCode === 68) && dir != 'left') {
        s.laDireccion(1, 0);
        dir = 'right';
    } else if ((keyCode === LEFT_ARROW || keyCode === 65) && dir != 'right') {
        s.laDireccion(-1, 0);
        dir = 'left';
    }
}

