class ProductList {
  constructor() {
    this._products = [];
  }

  add(product) {
    this._products.push(product);
  }

  set filter(filter) {
    this._filter = filter;
  }

  get products() {
    console.log('Recuperando produtos com filtro: ' + this._filter);
    return [].concat(this._products).filter(p => this._filter ?
      p.name.toLowerCase().indexOf(this._filter.toLowerCase()) !== -1 : true);
  }
}
