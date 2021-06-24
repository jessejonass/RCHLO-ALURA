class View {
  constructor(element) {
    if (!element) {
      throw new Error('Elemento deve ser especificado!');
    }
    this._element = element;
  }

  template() {
    throw new Error("O método template deve ser implementado");
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
