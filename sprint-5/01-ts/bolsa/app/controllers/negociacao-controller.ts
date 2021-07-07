import { DiaSemana } from "../enums/dias-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  // chama a classe de view e envia para o constructor dela a #id || .class
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  // mensagem view
  private mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValor = document.querySelector('#valor') as HTMLInputElement;

    // atualiza a visualização que está em index - #negociacoesView
    // envia lista de negociacoes que a view recebe
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value,
    );

    if (!this.diaUtil(negociacao.data)) {
      this.mensagemView.update('Negociações somente em dias úteis :)');
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.limpaForm();
    this.atualizaView();
  }

  private limpaForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
  }

  private diaUtil(data: Date) {
    return data.getDay() > DiaSemana.DOMINGO && data.getDay() < DiaSemana.SABADO;
  }
}