export class NegociacoesView {
  // dizer que o elemento a ser chamado no index.html é do tipo HTMLElement
  private elemento: HTMLElement;

  // passar para  view um seletor - #id ou .class
  constructor(seletor: string) {
    // fazer a busca no documento pelo seletor passado na declaração
    this.elemento = document.querySelector(seletor);
  }

  template(): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>

        <tbody>
          
        </tbody>
      </table>
    `;
  }

  // renderiza no local selecionado #id o template com o innerHTML
  update(): void {
    this.elemento.innerHTML = this.template();
  }
}