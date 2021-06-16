class ProductsList {
  constructor() {
    this._produtos = [];
  }

  get negociacoes() {
    // cópia de produtos para blindar o this._produtos
    return [].concat(this._negociacoes);
  }
}
