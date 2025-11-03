const NP = 500;
let pelotas = [];
let cuadros = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  for(let i = 0; i < NP; i++){
    pelotas[i] = new Pelota();
    cuadros[i] = new Cuadro();
  }
}

function draw(){
  background(120);

  // actualizamos y dibujamos ambos arreglos en el mismo bucle
  for(let i = 0; i < NP; i++){
    pelotas[i].actualizar();
    pelotas[i].visualizar();

    cuadros[i].actualizar();
    cuadros[i].visualizar();
  }
}
/**
 * Function actualizar
 * 
 * Actualiza la posición de la bola y verifica colisiones con los bordes
 */



/**
 * function visualizar
 * Se encapsula la forma en la que se ve la bola
 * p5 identifica el segundo valor como trasnparencia entre 0/200 en fill(r,g,b)
 */

