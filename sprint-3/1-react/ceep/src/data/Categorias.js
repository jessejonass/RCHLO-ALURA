export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = []; // lista de observadores
  }

  inscrever(f) { // referencia para um metodo: onkeyup -> change input
    this._inscritos.push(f);
  }

  desinscrever(f) {
    console.log(this._inscritos.length);
    this._inscritos = this._inscritos.filter(fn => fn !== f);
    console.log(this._inscritos.length);
  }

  notificar() {
    this._inscritos.forEach(f => {
      f(this.categorias);
    });
  }

  criarCategoria(categoria) {
    this.categorias.push(categoria);
    this.notificar();
  }
}