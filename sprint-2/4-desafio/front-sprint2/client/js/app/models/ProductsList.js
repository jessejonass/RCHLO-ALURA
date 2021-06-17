class ProductsList {
  constructor() {
    this._products = [];
  }

  get products() {
    return [].concat(this._products);
  }

  add(produto) {
    this._products.push(produto);
  }

  clear() {
    this._products = [];
  }
}
