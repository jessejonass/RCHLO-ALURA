export class NegociacoesView {
    // passar para  view um seletor - #id ou .class
    constructor(seletor) {
        // fazer a busca no documento pelo seletor passado na declaração
        this.elemento = document.querySelector(seletor);
    }
    template() {
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
    update() {
        this.elemento.innerHTML = this.template();
    }
}
