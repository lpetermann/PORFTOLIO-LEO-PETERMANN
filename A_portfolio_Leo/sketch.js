var shape = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10, 10, 10);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    let r = (0, 50);
    let b = (0, 50);
    let g = (0, 50);
    fill(r, b, g);


    if (shape == false) {
        ellipse(mouseX, mouseY, 200, 200);
    }




}

function mousePressed() {
    shape = false;
}
function keyPressed() {
    clear(255, 193, 242);
}

