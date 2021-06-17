class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._productList = new Bind(
      new ProductsList(),
      new ProductsView($('.products__row')),
      'add',
      'search',
      'clear'
    );

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this.allProducts();
  }

  allProducts() {
    let service = new ProductService();

    service.allProducts()
    .then(products => {
        products.forEach(p => this._productList.add(p));
    })
    .catch(err => this._message.message = err);
  }

  search(event) {
    event.preventDefault();

    let searchTerm = document.querySelector('.header__input').value;
    let productList = this._productList._products;

    if (searchTerm == '') {
      this._productList.clear();
      this.allProducts();
    } else {
      this._productList.clear();

      productList.filter(
        p => p.descricao.toUpperCase().includes(searchTerm.toUpperCase()) 
        && this._productList.add(p)
      );
    }
  }
}
