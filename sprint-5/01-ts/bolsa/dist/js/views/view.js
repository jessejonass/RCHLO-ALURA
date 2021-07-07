export class View {
    constructor(seletor, escape) {
        this.escape = false;
        this.elemento = document.querySelector(seletor);
        if (escape) {
            this.escape = escape;
        }
    }
    update(mensagem) {
        let template = this.template(mensagem);
        if (this.escape) {
            template = template.replace(/<script>[\s\S*?<\/script>]/, '');
        }
        this.elemento.innerHTML = template;
    }
}
