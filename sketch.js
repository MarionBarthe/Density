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


let dense_1 = [colours[0],colours[0],colours[0],colours[0],colours[0],colours[3]]
let dense_2 = [colours[0],colours[0],colours[0],colours[3],colours[3],colours[3]]
let dense_3 = [colours[0],colours[0],colours[3],colours[3],colours[3],colours[3]]
let dense_4 = [colours[0],colours[3],colours[3],colours[3],colours[3],colours[3]]



let taille_rect = 1.5;
let division_X = 16*3*4*2;
let division_Y = 16*2*4*2;

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
  if(ceil(tour) - tour != 0){
    let tmp = (int)(Math.random()*4);
    data_.push(tmp == 0?10:tmp == 1?3:tmp == 2?2:1)
  }

  return data_;
}

function setup() {
  createCanvas(division_X*taille_rect, division_Y*taille_rect);
  noStroke()
  
}

function draw() {
  
  let data_1 = push_array(1);
  let superfield = [];
  while (data_1.length) {
    superfield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
  }

  data_1 = push_array(4.75);
  let largefield = [];
  while (data_1.length) {
    largefield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
  }

  
  data_1 = push_array(9.75);
  let smallfield = [];
  while (data_1.length) {
    smallfield.push(data_1.splice(data_1.length * Math.random() | 0, 1)[0]);
  }


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

      let ran = (int)(Math.random()*3);
      //console.log(ran)
      let palette = ran == 0?small:ran == 1?large:sup;
      remplissage(palette);
      
     //fill(ran)
      
      rect(i*taille_rect, j*taille_rect, taille_rect, taille_rect);     
    }  
  }
}
function remplissage(palette){
  switch(palette){
        case 10:
          fill(dense_1[(int)(dense_1.length * Math.random())]);
          //fill(dense_1[(int)((mouseX * Math.random())%dense_1.length)]);
          break;
        
        case 3:
          fill(dense_2[(int)(dense_2.length * Math.random())]);
          //fill(dense_2[(int)((mouseX * Math.random())%dense_2.length)]);
          break;
        
        case 2:
          fill(dense_3[(int)(dense_3.length * Math.random())]);
          //fill(dense_3[(int)((mouseX * Math.random())%dense_3.length)]);
          break;
        
        case 1:
          fill(dense_4[(int)(dense_4.length * Math.random())]);
          //fill(dense_4[(int)((mouseX * Math.random())%dense_4.length)]);
          break;
        
  }
}
function mousePressed() {
  setup();
}
