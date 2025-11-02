const NP = 500; 
let pelotas = [""];
function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    for(let i = 0; i < NP ; i++ ){
        let nuevaPelota = new Pelota();
        pelotas[i] = nuevaPelota

    }
}
function draw(){
    background(120)

    for(let i = 0; i < NP ; i++ ){
         pelotas[i].actualizar();
         pelotas[i].visualizar();   
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

