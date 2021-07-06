export class View {
    // passar para  view um seletor - #id ou .class
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // renderiza no local selecionado #id o template com o innerHTML
    update(mensagem) {
        this.elemento.innerHTML = this.template(mensagem);
    }
}
