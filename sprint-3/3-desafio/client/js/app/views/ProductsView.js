class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
    <div class="products__row">
      <ol class="products__list">
      ${model.products
        .map(
          (p, i) => `
              <li class="products__card card">
                <div class="card">
                  <img class="card__img" src="${p.image}"/>
                  <p class="card__description">
                    ${p.name}
                  </p>
                  <p class="card__price">
                    R$ ${p.price}
                  </p>
                </div>
              </li>
              ${i > 0 && i < model.products.length - 1 && (i + 1) % 4 === 0
              ? `
                  </ol>
                </div>
                <div class="products__row">
                  <ol class="products__list">
                  `
              : ""
            }
        `
        )
        .join("")}
      </ol>
    </div>`;
  }
}
