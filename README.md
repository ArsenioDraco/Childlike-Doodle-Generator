# Childlike-Doodle-Generator

The Childlike Doodle Generator is a browser-based tool that produces fully randomized, childlike crayon drawings using the p5.js library. The goal of the project is to simulate the appearance of drawings children make at a young age through controlled randomness, layered shapes, and jittered line work. Each generated drawing is unique due to positional variation, scaling differences, and randomized selection of visual elements such as suns, houses, flowers, trees, stick figures, and handwritten text. The generator is primarily intended as an exploration of algorithmic drawing, procedural visual variation, and deliberate imperfection as a design choice.

## Main Features
### Multiple Doodle Types

The script can generate six distinct doodle categories, each with its own drawing logic:

1) Sun

2) House

3) Stick figure

4) Flower

5) Tree

6) Handwritten words (“ME”, “MOM”, “DAD”, “HI”, “DOG”)

During each run, the system selects 6–10 elements at random and renders them at varying positions, angles, and scales.

### Crayon-Line Simulation

A custom crayonLine() function introduces controlled wobble and noise into every drawn stroke.
Key characteristics include:

1) Randomized stroke weight per segment

2) Vertex jitter to break linear precision

3) Imperfect interpolation between endpoints

This produces the uneven, shaky feel of a crayon dragged by hand across paper.

### One-Click Regeneration

The New Drawing button clears the canvas and renders an entirely new randomized composition.

### Export Functionality

The Save Drawing button exports the current canvas as a .png file using p5.js's built-in saveCanvas() method.

### Optional Grid Overlay

A Toggle Grid button enables or disables a 50-pixel grid, useful for presenting the artwork with a sketchbook or draft-paper aesthetic.

## Technical Highlights
### JavaScript / p5.js

1) Uses the p5.js drawing environment (setup(), canvas creation, drawing primitives).

2) All doodle logic is modularized into individual drawing functions (drawSun(), drawTree(), etc.).

3) Randomness is controlled through p5.js utilities (random(), floor(), lerp(), cos(), sin()).

4) Event listeners are attached directly to DOM elements for interactivity.

5) The generator runs without animation (noLoop()), redrawing only on demand.

### Drawing Logic

Each doodle type uses its own procedure to emulate childlike drawing characteristics:

1) Suns use layered translucent ellipses and jittered rays.

2) Houses combine rectangles with hand-drawn roof lines.

3) tick figures use noisy segments and circular heads.

4) Flowers generate a randomized number of petals with translucent overlapping strokes.

5) Trees render a trunk via crayon lines and canopy blobs with randomized dimensions.

6) Handwritten words apply rotation and per-letter position jitter to resemble early handwriting.

### Layout and Composition

1) Each doodle is placed using a randomly selected (x, y) location.

2) Object scale varies within a defined range to avoid uniformity.

3) Canvas background uses a paper-like off-white color (254, 252, 249).

### HTML Integration

Minimal HTML is required:

1) Three buttons (newDrawing, saveDrawing, toggleGrid).

2) The p5.js library import.

3) The main JavaScript file (script.js).

## CSS

Like the HTML structure, the CSS is intentionally minimal. The focus of the project is the generative artwork itself, so the interface only includes the basic styling needed to support the drawing canvas and controls.

## Personal Note

This project was my first time creating an art generator. Rather than relying on modern prompt-based AI systems, I wanted to explore how far procedural, code-driven drawing can be pushed using simple building blocks and controlled randomness. Childlike drawings have recognizable qualities across media—crayon textures, imprecise shapes, uneven color application—and recreating these characteristics through code presented an interesting challenge. One of the main objectives was to intentionally reproduce “mistakes” in a controlled, algorithmic way, which stands in contrast to typical digital drawing workflows designed to eliminate such irregularities.
