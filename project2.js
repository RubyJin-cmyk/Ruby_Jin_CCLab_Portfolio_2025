let faceWidth, faceHeight, eyeSize, mouthWidth, mouthHeight;
let r, g, b;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("sketch-container");  // 关键：挂载到 div
  frameRate(60);
  
  r = 200; g = 200; b = 255;  // 初始化背景
  randomizeFace();             // 初始化面部
}

function draw() {
  background(r, g, b);
  faceHeight = mouseX / 1.8 + 20;
  faceWidth = mouseY / 1.8 + 20;

  noStroke();
  fill(255, 215, 179);
  ellipse(width/2, height/2, faceWidth, faceHeight);

  fill(0);
  ellipse(width/2 - faceWidth/4, height/2 - 30, eyeSize, eyeSize);
  ellipse(width/2 + faceWidth/4, height/2 - 30, eyeSize, eyeSize);

  fill(0);
  rectMode(CENTER);
  rect(width/2, height/2 + 50, mouthWidth, mouthHeight, 20);
}

function randomizeFace() {
  faceWidth = random(150, 250);
  faceHeight = random(180, 280);
  eyeSize = random(10, 50);
  mouthWidth = random(40, 100);
  mouthHeight = random(10, 40);
} 

function keyPressed() {
  randomizeFace();
}

function mousePressed(){
  r = random(0,225);
  g = random(0,225);
  b = random(0,225);
}
