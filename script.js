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

