import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  // chama a classe de view e envia para o constructor dela a #id || .class
  private negociacoesView = new NegociacoesView('#negociacoesView');

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');

    // atualiza a visualização que está em index - #negociacoesView
    this.negociacoesView.update();
  }

  criaNegociacao(): Negociacao {
    return new Negociacao(
      new Date(this.inputData.value.replace(/-/g, ',')),
      Number(this.inputQuantidade.value),
      Number(this.inputValor.value),
    );
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);

    console.log(this.negociacoes.lista());
    
    this.limpaForm();
  }

  limpaForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }
}