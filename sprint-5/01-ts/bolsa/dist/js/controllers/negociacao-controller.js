import { DiaSemana } from "../enums/dias-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        // chama a classe de view e envia para o constructor dela a #id || .class
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        // mensagem view
        this.mensagemView = new MensagemView('#mensagemView', false);
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        // atualiza a visualização que está em index - #negociacoesView
        // envia lista de negociacoes que a view recebe
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update('Negociações somente em dias úteis :)');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limpaForm();
        this.atualizaView();
    }
    limpaForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
    diaUtil(data) {
        return data.getDay() > DiaSemana.DOMINGO && data.getDay() < DiaSemana.SABADO;
    }
}
