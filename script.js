let showGrid = false;

    function setup() {
      createCanvas(800, 600);
      noLoop();
      generateDrawing();

      document.getElementById('newDrawing').addEventListener('click', () => {
        clear();
        generateDrawing();
      });
 document.getElementById('saveDrawing').addEventListener('click', () => {
        saveCanvas('childlike_doodle', 'png');
      });

      document.getElementById('toggleGrid').addEventListener('click', () => {
        showGrid = !showGrid;
        clear();
        generateDrawing();
      });
    }
 function generateDrawing() {
      background(254, 252, 249);
      if (showGrid) drawGrid();

      let doodles = floor(random(6, 11));
      for (let i = 0; i < doodles; i++) {
        let x = random(width);
        let y = random(height);
        let s = random(0.6, 1.4);
        push();
        translate(x, y);
        scale(s);
        let type = floor(random(6));
        switch (type) {
          case 0: drawSun(); break;
          case 1: drawHouse(); break;
          case 2: drawStickman(); break;
          case 3: drawFlower(); break;
          case 4: drawTree(); break;
          case 5: drawName(); break;
        }
        pop();
      }
    }
 function crayonLine(x1, y1, x2, y2, c) {
      stroke(c);
      strokeWeight(random(2, 5));
      noFill();
      let steps = dist(x1, y1, x2, y2) / 5;
      beginShape();
      for (let i = 0; i <= steps; i++) {
        let t = i / steps;
        let x = lerp(x1, x2, t) + random(-2, 2);
        let y = lerp(y1, y2, t) + random(-2, 2);
        vertex(x, y);
      }
      endShape();
    }
 function drawSun() {
      let c = color(random(['#FFD60A', '#FF9500', '#FFCC00']));
      noStroke();
      for (let i = 0; i < 10; i++) {
        fill(red(c), green(c), blue(c), 50);
        ellipse(random(-10, 10), random(-10, 10), 80 + random(-10, 10));
      }
      for (let i = 0; i < 12; i++) {
        crayonLine(0, 0, cos(TWO_PI * i / 12) * 60, sin(TWO_PI * i / 12) * 60, c);
      }
    }
   function drawHouse() {
      let baseColor = color(random(['#FF3B30', '#FF2D55', '#34C759', '#0A84FF']));
      fill(red(baseColor), green(baseColor), blue(baseColor), 120);
      noStroke();
      rect(-30, -20, 60, 40);
      crayonLine(-40, -20, 0, -60, baseColor);
      crayonLine(40, -20, 0, -60, baseColor);
      crayonLine(-40, -20, 40, -20, baseColor);
    }
function drawStickman() {
      let c = color(0);
      crayonLine(0, -20, 0, 20, c);
      crayonLine(0, 0, -15, 10, c);
      crayonLine(0, 0, 15, 10, c);
      crayonLine(0, 20, -10, 40, c);
      crayonLine(0, 20, 10, 40, c);
      noFill();
      ellipse(0, -30, 20, 20);
    }
 function drawFlower() {
      let petals = floor(random(4, 8));
      let petalColor = color(random(['#FF2D55', '#AF52DE', '#FF9500', '#FFD60A']));
      for (let i = 0; i < petals; i++) {
        let angle = TWO_PI * i / petals;
        let px = cos(angle) * 15;
        let py = sin(angle) * 15;
        for (let j = 0; j < 8; j++) {
          fill(red(petalColor), green(petalColor), blue(petalColor), 60);
          noStroke();
          ellipse(px + random(-2, 2), py + random(-2, 2), 15 + random(-3, 3));
        }

