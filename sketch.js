let x, y;
let myCanvas;
let img, img2;
let myFont;


//Preload image to reduce loading time
function preload() {
    img = loadImage('Sea.jpg');
    sea = loadImage('sea.PNG');


}

function setup() {
    //A reference to the DOM object
    myCanvas = createCanvas(720, 400);
    // Starts in the middle
    x = width / 2;
    y = 280;

    frameRate(30);
    //Make it a child element
    myCanvas.parent("divId");
}

function draw() {
    //Set the image as the background
    background(img);
    //Text
    textSize(32);
    textFont("Arial");
    text("The Sun Rising", 30, 50)

    // Draw the Sun(Red Circle)
    stroke(50);
    fill(250, 0, 0);
    // Moving up
    y = y - 1;

    ellipse(x, y, 50, 50);
    image(sea, 0, 245, 720, 200);





    // Reset the height
    if (y < 0) {
        y = 280;
    }
}