/**
 * A ESTO SE LO CONOCE COMO METODOS QUE SON FUNCIONES INTERNAS DENTRO DE UNA CLASE
 * TAMBIEN SE LE VA A CONOCER COMO UN PLANO PERO QUE SIRVE PARA INSTRUCCIONES PARA CONSTRUIR 
 */
class Pelota{
  constructor(){
    this.diam = random(10,100);
    this.rad = this.diam / 2;

    this.posx = random(this.rad, width - this.rad);
    this.posy = random(this.rad, height - this.rad);

    this.velx = random(-5,5);
    this.vely = random(-5,5);

    this.nuevoColor = color(random(10,150), random(10,150), random(10,150), 100);
  }

  actualizar(){
    if(this.posx > width - this.rad || this.posx < this.rad) this.velx *= -1;
    if(this.posy > height - this.rad || this.posy < this.rad) this.vely *= -1;

    this.posx += this.velx;
    this.posy += this.vely;
  }

  visualizar(){
    fill(this.nuevoColor);
    stroke(255);
    strokeWeight(1);
    circle(this.posx, this.posy, this.diam);
  }
}

class Cuadro {
  constructor() {
    this.lado = random(10, 100);
    this.radio = this.lado / 2; // AQUÍ USE LADO PORQUE YA NO TENEMOS UN CIRCLE Y ENTONCES EL TAMAÑO YA NO LO LLAMAOS DIAMENTRO SINO LADO 

    this.posx = random(this.radio, width - this.radio);
    this.posy = random(this.radio, height - this.radio);

    this.velx = random(-5, 5);
    this.vely = random(-5, 5);

    this.colorCuadro = color(random(10,150), random(10,150), random(10,150),150);
  }

  actualizar() {
    if (this.posx > width - this.radio || this.posx < this.radio) this.velx *= -1;
    if (this.posy > height - this.radio || this.posy < this.radio) this.vely *= -1;
    this.posx += this.velx;
    this.posy += this.vely;
  }

  visualizar() {
    fill(this.colorCuadro);
    stroke(255);
    strokeWeight(1);
    square(this.posx, this.posy, this.lado);
  }
}