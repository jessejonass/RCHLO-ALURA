export abstract class View<T> {
  // dizer que o elemento a ser chamado no index.html é do tipo HTMLElement
  protected elemento: HTMLElement;

  // passar para  view um seletor - #id ou .class
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(template: T): string;

  // renderiza no local selecionado #id o template com o innerHTML
  public update(mensagem: T): void {
    this.elemento.innerHTML = this.template(mensagem);
  }
}