export default class Notas {
  constructor() {
    this.notas = [];
    this._inscritos = []; // lista de observadores
  }

  criarNota(titulo, texto, categoria) {
    const nota = new Nota(titulo, texto, categoria);
    this.notas.push(nota);
    this.notificar();
  }

  deletarNota(index) {
    this.notas.splice(index, 1);
    this.notificar();
  }

  inscrever(f) { // referencia para um metodo: onkeyup -> change input
    this._inscritos.push(f);
  }

  desinscrever(f) {
    this._inscritos = this._inscritos.filter(fn => fn !== f);
  }

  notificar() {
    this._inscritos.forEach(f => {
      f(this.notas);
    });
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}