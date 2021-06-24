class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  list() {
    return this._http
      .get("products")
      .then((products) =>
        products.map((p) => new Product(p.image, p.name, p.price))
      );
  }
}
