class Negociacao {

  // constructor ~function~ que recebe parametros
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime()); // recebe sempre seu valor - não confia em outros
    this._quantidade = quantidade;
    this._valor = valor;

    // congelamento para imutabilidade
    Object.freeze(this);
  }  

  // métodos ~functions~ de acesso - getters
  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime()); // retorna em timezone
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}