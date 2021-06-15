class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    // lidando com a tabela de lista de negociacoes
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 
      'remove',
    );

    // lidando com a mensagem exibida
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto',
    );
  }

  importaNegociacoes() {
    // ajax
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          JSON.parse(xhr.responseText).map(objeto => 
            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
          ).forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações importadas com sucesso.';
        } else {
          console.log(JSON.parse(xhr.responseText));
          this._mensagem.texto = 'Não foi possível obter as negociações';
        }
      }
    };

    xhr.send(); // enviar a solicitação
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas';
  }

  adiciona(e) {
    e.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = 'Negociação adicionada';
    this._limpaFormulario();
  }

  // usando a model (classe) de Negociacao em um método auxiliar - interno
  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value,
    );
  }

  // metodo so pode ser chamado pela propria classe NegociacaoController
  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0;
    this._inputData.focus();
  }
}