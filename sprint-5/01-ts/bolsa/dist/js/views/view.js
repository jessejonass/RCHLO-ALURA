export class View {
    // passar para  view um seletor - #id ou .class
    constructor(seletor, escape) {
        this.escape = false;
        this.elemento = document.querySelector(seletor);
    }
    // renderiza no local selecionado #id o template com o innerHTML
    update(mensagem) {
        let template = this.template(mensagem);
        if (this.escape) {
            template = template.replace(/<script>[\s\S*?<\/script>]/, '');
        }
        this.elemento.innerHTML = template;
    }
}
