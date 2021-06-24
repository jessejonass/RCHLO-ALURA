class MessageView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return model.text ? `<p class="alert">${model.text}</p>` : "<p></p>";
  }
}
