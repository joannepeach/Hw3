function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(225);
for (var x = 0; x < 400; x = x+10){
  line ( 200, 0, x, 400);
}
}
