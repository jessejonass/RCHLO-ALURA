export class NegociacoesView {
    // passar para  view um seletor - #id ou .class
    constructor(seletor) {
        // fazer a busca no documento pelo seletor passado na declaração
        this.elemento = document.querySelector(seletor);
    }
    template(negociacoes) {
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
          ${negociacoes.lista().map(n => (`
              <tr>
                <td>${n.data}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
              </tr>
            `)).join('')}
        </tbody>
      </table>
    `;
    }
    // renderiza no local selecionado #id o template com o innerHTML
    update(negociacoes) {
        this.elemento.innerHTML = this.template(negociacoes);
    }
}
