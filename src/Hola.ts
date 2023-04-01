import { Summary } from './array';

class Hola {
  mensaje: string;
  constructor(msg: string) {
    this.mensaje = msg;
  }

  hola(): void {
    console.log(`Hola ${this.mensaje}`);
  }
}

const myhola = new Hola('Mundo');
myhola.hola();

const myarray: Summary = { sum: 3, mean: 2, power: 5 };
console.log(myarray);
