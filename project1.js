function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
}

function draw() {
  background(102, 102, 255);

  // --- 左侧大矩形 ---
  push();
  translate(300, 300);
  rotate(PI / 2); // 原本 rotate(90)
  fill(255, 153, 255);
  noStroke();
  rect(-150, -350, 300, 700); // 调整到画布内
  pop();

  // --- 白色横条 ---
  noStroke();
  fill(255);
  rect(30, 350, 540, 30); // 缩到画布内

  // --- 白色竖线 ---
  let xPositions = [550, 500, 450, 400, 350, 300, 250];
  for (let x of xPositions) {
    rect(x - 10, 500, 20, 100); // 高度从 300 → 100
  }

  // --- 树干 ---
  fill(120, 70, 20);
  rect(150, 165, 50, 130);

  // --- 树叶 ---
  drawLeaf(115, 150, -45, 70, 25);
  drawLeaf(115, 150, 45, 70, 25);
  drawLeaf(200, 130, -45, 60, 20);
  drawLeaf(200, 130, 45, 60, 20);

  // --- 蓝色倒三角两个 ---
  push();
  blendMode(BURN);
  fill(180, 220, 250, 120);
  stroke(1, 0, 200);
  strokeWeight(3);

  quad(100, 100, 250, 100, 195, 230, 45, 230);
  quad(350, 100, 500, 100, 445, 230, 295, 230);

  pop();
  blendMode(BLEND);

  // show mouse coord
  fill(0);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}

function drawLeaf(x, y, angle, w, h) {
  push();
  translate(x, y);
  rotate(radians(angle));
  fill(20, 150, 70);
  ellipse(0, 0, w, h);
  pop();
}
