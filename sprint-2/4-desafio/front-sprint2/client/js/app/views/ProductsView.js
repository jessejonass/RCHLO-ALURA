class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    return `
      <div class="products__row">
        <ol class="products__list">
          ${data._products.map(produto => {
            return `
            <li class="products__card">
              <div class="card">
                <img
                  class="card__img"
                  src="${produto.imagem}"
                  alt="${produto.descricao}"
                />
                <p class="card__description">
                  ${produto.descricao}
                </p>
                <p class="card__price">${produto.valor}</p>
              </div>
            </li>
            `
          }).join('')}
        </ol>
      </div>
    `;
  }
}
