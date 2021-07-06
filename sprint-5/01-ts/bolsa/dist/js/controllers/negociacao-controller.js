import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        // chama a classe de view e envia para o constructor dela a #id || .class
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        // mensagem view
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        // atualiza a visualização que está em index - #negociacoesView
        // envia lista de negociacoes que a view recebe
        this.negociacoesView.update(this.negociacoes);
    }
    criaNegociacao() {
        return new Negociacao(new Date(this.inputData.value.replace(/-/g, ',')), Number(this.inputQuantidade.value), Number(this.inputValor.value));
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
        this.limpaForm();
    }
    limpaForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
