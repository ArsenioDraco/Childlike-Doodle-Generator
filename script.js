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

