function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(225);
for (var x = 2; x < 2000; x = x+15){
	noFill();
  ellipse ( 200, 200, x, x);
	
}
}
