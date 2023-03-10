function setup() {
  createCanvas(1024, 1024);
}


function draw() {
  background(200);

  colors =['#000', '#FFF'];
  for (let i=0; i<1024; i++){
    for (let j=0; j<1024; j++){
      let color = random(colors);
      stroke(color);
      point(i,j);
    }
  }
}