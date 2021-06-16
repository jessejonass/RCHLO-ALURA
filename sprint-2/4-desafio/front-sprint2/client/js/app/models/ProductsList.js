class ProductsList {
  constructor() {
    this._produtos = [];
  }

  get produtos() {
    // cópia de produtos para blindar o this._produtos
    return [].concat(this._produtos);
  }

  add(produto) {
    this._produtos.push(produto);
  }
}
