var socket;

function setup() {
createCanvas(200, 200);
background(51);

socket = socket.io.connect('http://localhost:1000');
}

function draw() {
 background(51);
 ellipse(mouseX, mouseY, 60, 60)
}