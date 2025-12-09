let showGrid = false;

    function setup() {
      createCanvas(800, 600);
      noLoop();
      generateDrawing();

      document.getElementById('newDrawing').addEventListener('click', () => {
        clear();
        generateDrawing();
      });

