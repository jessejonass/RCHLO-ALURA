class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._productList = new Bind(
      new ProductsList(),
      new ProductsView($('.products__row')),
      'add',
    );

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this._allProducts();
  }

  _allProducts() {
    let service = new ProductService();

    service.allProducts()
    .then(products => {
        products.forEach(p => this._productList.add(p));
    }).catch(err => this._message.message = err);
  }
}
