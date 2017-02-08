function setup() { 
  createCanvas(600, 600);
  background(255);
} 

function draw() { 
	noFill();
  rectMode(CENTER);
  
for (var a = 0; a <= 400; a += 100) {
for (var b = 20; b <=80; b +=20){
  rect(100+a, 300, b, b);
}
}
}
