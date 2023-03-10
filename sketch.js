function setup() {
  createCanvas(768, 512);
  noLoop();
}


function draw() {
  background(200);

  let width = 768;
  let height = 512;

  colors =['#000', '#FFF'];
  for (let i=0; i<width; i++){
    for (let j=0; j<height; j++){
      let color = random(colors);
      stroke(color);
      point(i,j);
    }
  }
}