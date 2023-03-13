/* - - - palette - - - */
//Balmy, Calm, Quiet
// Couleurs du lever et du coucher du soleil
/*
Les trois premières couleurs (lever du soleil) sont pastels pour contraster avec celles des trois dernières (coucher du soleil) qui sont plus saturée

De plus, s'ajoute au contraste, les couleurs complémentaires bleu et jaune, les deux couleurs qui ressortent le plus
*/

let colours = [
  "#000000",
  "#404040",
  "#bfbfbf",
  "#FFFFF"
];


var data = [  colours[0],colours[0],colours[0],colours[0],colours[0],colours[0],colours[0],colours[0],colours[0],colours[0],colours[0],
  colours[1],  colours[1],  colours[1],
  colours[2],  colours[2],
  colours[3]]; 

let dense_1 = [colours[0],colours[0],colours[0],colours[0],colours[0],colours[3]]
let dense_2 = [colours[0],colours[0],colours[0],colours[0],colours[3],colours[3]]
let dense_3 = [colours[0],colours[0],colours[0],colours[3],colours[3],colours[3]]
let dense_4 = [colours[0],colours[0],colours[3],colours[3],colours[3],colours[3]]


let division_X = 16*3*4;
let division_Y = 16*2*4;

let taille_rect = 4;

function push_array(tour){
  let data_ = [];
  for(let i = 0; i < 10*tour; i++){
    data_.push(10);
  }
  for(let i = 0; i < 3*tour; i++){
    data_.push(3);
  }
  for(let i = 0; i < 2*tour; i++){
    data_.push(2);
  }
  for(let i = 0; i < 1*tour; i++){
    data_.push(1);
  }
  return data_;
}

function setup() {
  createCanvas(1000, 1000);
  noStroke()
  grille()
  
}

function draw() {
  
}
function mousePressed() {
  setup();
}
function grille(parameter_random = 1){
  background(240);
  let data_1 = push_array(1);
  let superfield = [];
  while (data_1.length) {
    superfield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
  }

  data_1 = push_array(5);
  let largefield = [];
  console.log(largefield)
  while (data_1.length) {
    largefield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
  }

  
  data_1 = push_array(10);
  let smallfield = [];
  console.log(smallfield)
  while (data_1.length) {
    smallfield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
  }

console.log(smallfield);
  for(let i=0; i < division_X; i++){
    for(let j=0; j < division_Y; j++){
      //let ran = data.splice(data.length * Math.random() | 0, 1)[0];
      let ligne_1   = (int)(i/(int)(division_X/4))
      let colonne_1 = (int)(j/(int)(division_Y/4))
      let add_1 = (ligne_1)*4+(colonne_1)
      
      let ligne_2 = (int)(i/(int)(division_X/16))
      let colonne_2 = (int)(j/(int)(division_Y/16))
      let add_2 = (ligne_2)*4+(colonne_2)

      
      let ligne_3 = (int)(i/(int)(division_X/32))
      let colonne_3 = (int)(j/(int)(division_Y/32))
      let add_3 = (ligne_3)*4+(colonne_3)

      
      let sup = superfield[add_1]
      let large = largefield[add_2]
      let small = smallfield[add_3]

      let ran = Math.random()*12;
      let palette = ran == 0?sup:ran == 1?large:small;
      switch(palette){
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
      
     //fill(ran)
      
      rect(i*taille_rect, j*taille_rect, taille_rect, taille_rect);     
    }  
  }


}
