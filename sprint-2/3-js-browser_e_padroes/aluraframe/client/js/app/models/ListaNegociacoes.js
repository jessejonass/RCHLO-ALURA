class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  // metodos
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  // getter para exibir negociacoes
  get negociacoes() {
    return this._negociacoes;
  }
}