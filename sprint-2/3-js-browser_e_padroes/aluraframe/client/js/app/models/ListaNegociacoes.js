class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  // metodos
  ordena(criterio) {
    this._negociacoes.sort(criterio);        
  }

  inverteOrdem() {
    this._negociacoes.reverse();
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  // getter para exibir negociacoes
  get negociacoes() {
    return [].concat(this._negociacoes); // blindando a lista passando uma copia
  }

  esvazia() {
    this._negociacoes = [];
  }
}