let posX;
let posY;

let velX;
let velY;

let radius;

let circleClr;

// UI

let sliderHue;
let clickCounter;

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('canvasParent');
    colorMode(HSB, 360, 100, 100);

    sliderHue = createSlider(0, 360, 0, 15);
    sliderHue.parent('canvasUI');
    sliderHue.style('width', '100px');

    posX = width/2;
    posY = height/2;
    velX = 3.7;
    velY = 1.3;
    radius = 50;
    circleClr = color(0, 80, 100);

    clickCounter = 0;

}

function draw() {
    background(120, 40, 100);

    // rectangle
    noFill();
    stroke(270, 80, 80);
    strokeWeight(10);
    rect(5, 5, 70, 30);

    // score counter
    textSize(24);
    noStroke();
    fill(270, 80, 80);
    text(clickCounter, 12, 28);

    // circle
    noStroke();
    circleClr = color(sliderHue.value(), 80, 100);
    fill(circleClr);
    circle(posX, posY, radius * 2);
    if(posX + radius>= width || posX - radius <= 0){
        velX = velX * -1;
    }
    if(posY + radius >= height || posY - radius <= 0){
        velY = velY * -1;
    }
    posX += velX;
    posY += velY;

    
}

// end of draw

function mouseReleased() {
    if(dist(mouseX, mouseY, posX, posY) < radius){
        // circleClr = color(255, 800, 100);
        clickCounter ++;
        radius -=5;
    }
    else {
        // circleClr = color(0, 80, 100);
        clickCounter--;
        radius +=5;
    }
}