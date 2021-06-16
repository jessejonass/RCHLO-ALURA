class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    // quando a página for carregada, não tem critério. 
    // Só passa a ter quando ele começa a clicar nas colunas
    this._ordemAtual = ''; 

    // lidando com a tabela de lista de negociacoes
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 
      'esvazia',
      'ordena',
      'inverteOrdem',
    );

    // lidando com a mensagem exibida
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto',
    );
  }

  importaNegociacoes() {
    let service = new NegociacaoService();

    Promise.all([
      service.obterNegociacoesDaSemana(),
      service.obterNegociacoesDaSemanaAnterior(),
      service.obterNegociacoesDaSemanaRetrasada(),
    ]).then(negociacoes => {
      negociacoes.reduce((achatado, array) => achatado.concat(array), [])
      .forEach(n => this._listaNegociacoes.adiciona(n));
      this._mensagem.texto = 'Negociações importadas com sucesso.';
    }).catch(err => this._mensagem.texto = err);
  }

  ordena(coluna) {
    if(this._ordemAtual == coluna) {
      this._listaNegociacoes.inverteOrdem();
    } else {
      this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
    }
    this._ordemAtual = coluna;
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas';
  }

  adiciona(e) {
    e.preventDefault();

    try {
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = 'Negociação adicionada';
      this._limpaFormulario();
    } catch (err) {
      this._mensagem.texto = erro;
    }
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