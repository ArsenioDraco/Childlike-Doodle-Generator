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

