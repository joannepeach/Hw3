function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(225);
for (var x = 0; x <= 200; x += 10) {
  line (x, 200 + x, 400 - x, 200 + x);
	line(x, 200 - x, 400 - x, 200 - x);
}
}
