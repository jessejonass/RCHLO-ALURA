class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return new Promise((resolve, reject) => {
      this._http
      .get('/products')
      .then(products => {
        resolve(
          products.map(produto => new Product(produto.imagem, produto.descricao, produto.valor)));
      })
      .catch(err => {
        console.log(err);
        reject('Erro ao carregar produtos');
      })
    })
  }
}
