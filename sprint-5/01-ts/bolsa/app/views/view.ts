export abstract class View<T> {
  // dizer que o elemento a ser chamado no index.html é do tipo HTMLElement
  protected elemento: HTMLElement;
  private escape = false;

  // passar para  view um seletor - #id ou .class
  constructor(seletor: string, escape: boolean) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(template: T): string;

  // renderiza no local selecionado #id o template com o innerHTML
  public update(mensagem: T): void {
    let template = this.template(mensagem);
    if (this.escape) {
      template = template.replace(/<script>[\s\S*?<\/script>]/, '');
    }
    this.elemento.innerHTML = template;
  }
}