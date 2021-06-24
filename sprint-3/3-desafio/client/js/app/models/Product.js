class Product {
  constructor(image, name, price) {
    this._image = image;
    this._name = name;
    this._price = price;
    Object.freeze(this);
  }

  get image() {
    return this._image;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}
