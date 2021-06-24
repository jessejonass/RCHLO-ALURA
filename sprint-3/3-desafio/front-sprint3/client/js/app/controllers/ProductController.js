class ProductController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._productList = new Bind(
      new ProductList(),
      new ProductsView($("#productsView")),
      "add", "filter"
    );

    this._message = new Bind(
      new Message(),
      new MessageView($("#messageView")),
      "text"
    );

    this.loadProducts();
  }

  filtra(event) {
    this._productList.filtro = event.target.value;
  }

  loadProducts() {
    let service = new ProductService();
    service
      .list()
      .then((products) =>
        products
          .forEach((product) => {
            this._productList.add(product);
            console.log("Produtos carregados com sucesso!");
          })
      )
      .catch((erro) => {
        this._message.text = erro.message;
      });
  }
}
