
let button;

let taille_rect = 1.5;
let division_X = 16 * 3 * 4 * 2;
let division_Y = 16 * 2 * 4 * 2;

let colours = [
  "#000000",
  "#FFFFF"
];

let dense_1 = [colours[0], colours[0], colours[1]]
let dense_2 = [colours[0], colours[0], colours[0], colours[0], colours[1], colours[1], colours[1]]
let dense_3 = [colours[0], colours[0], colours[0], colours[1], colours[1], colours[1], colours[1]]
let dense_4 = [colours[0], colours[1], colours[1], colours[1]]



let superfield = [];
let largefield = [];
let smallfield = [];

function fill_field() {
  superfield = [];
  largefield = [];
  smallfield = [];
  let data_1 = push_array();
  while (data_1.length) {
    superfield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
  }

  for (let index = 0; index < superfield.length; index++) {
    data_1 = push_array(superfield[index]);
    while (data_1.length) {
      largefield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
    }

  }

  for (let index = 0; index < largefield.length; index++) {
    data_1 = push_array(largefield[index]);
    while (data_1.length) {
      smallfield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
    }

  }

}

function setup() {
  button = createButton('new distribution');
  button.style("margin-top", "1vw")
  button.center()

  button.mousePressed(fill_field);

  createCanvas(division_X * taille_rect, division_Y * taille_rect + 50);
  noStroke()
  frameRate(2);
  fill_field()


  //noLoop()



}


function push_array(type = 10) {
  let distrib = [];
  switch (type) {
    case 10: distrib = [10, 3, 2, 1];
      break;
    case 3: distrib = [3, 10, 1, 2];
      break;
    case 2: distrib = [2, 1, 10, 3];
      break;
    case 1: distrib = [1, 2, 3, 10];
      break;
  }
  let data_ = [];
  for (let i = 0; i < distrib[0]; i++) {
    data_.push(10);
  }
  for (let i = 0; i < distrib[1]; i++) {
    data_.push(3);
  }
  for (let i = 0; i < distrib[2]; i++) {
    data_.push(2);
  }
  for (let i = 0; i < distrib[3]; i++) {
    data_.push(1);
  }

  return data_;
}



function draw() {



  for (let i = 0; i < division_X; i++) {
    for (let j = 0; j < division_Y; j++) {
      let ligne_1 = (int)(i / (int)(division_X / 4));
      let colonne_1 = (int)(j / (int)(division_Y / 4));
      let add_1 = (ligne_1) * 4 + (colonne_1);

      let ligne_2 = (int)(i / (int)(division_X / 16));
      let colonne_2 = (int)(j / (int)(division_Y / 16));

      let add_2 = add_1 * 16 + ligne_2 % 8 + colonne_2 % 12;

      let ligne_3 = (int)(i / (int)(division_X / 32));
      let colonne_3 = (int)(j / (int)(division_Y / 32));
      let add_3 = add_1 * 32 + ligne_3 % 8 + colonne_3 % 12


      let sup = superfield[add_1]
      let large = largefield[add_2]
      let small = smallfield[add_3]
      let ran = (int)(Math.random() * 3);
      let palette = ran == 0 ? small : ran == 1 ? large : sup;
      remplissage(palette);


      rect(i * taille_rect, j * taille_rect + 50, taille_rect, taille_rect);
    }
  }
}
function remplissage(palette) {
  switch (palette) {
    case 10:
      fill(dense_1[(int)(dense_1.length * Math.random())]);
      break;

    case 3:
      fill(dense_2[(int)(dense_2.length * Math.random())]);
      break;

    case 2:
      fill(dense_3[(int)(dense_3.length * Math.random())]);
      break;

    case 1:
      fill(dense_4[(int)(dense_4.length * Math.random())]);
      break;

  }
}

