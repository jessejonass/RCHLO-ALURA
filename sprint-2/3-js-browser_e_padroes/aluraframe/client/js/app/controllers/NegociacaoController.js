class NegociacaoController {
  /**
   * quando o controller for criado peloa 1ªvez,
   * ele busca os elementos na DOM do document,
   * guarda nas propriedades da classe.
   * Evita várias buscas na DOM - usa uma espécie de cache
   */
  constructor() {
    // binding - mantem associacao do document.querySelector com o document
    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
  }

  adicionar(e) {
    // prevenindo comportamento padrão do formulário - que inclui reload
    e.preventDefault();

    // convertendo data do input para data correta usando regex
    // let data = new Date(this._inputData.value.replace(/-/g, ','));

    // adicionar a negociação em uma lista - lista em NegociacaoController
    this._listaNegociacoes.adiciona(this._criaNegociacao());

    // chamar o limpador de formulario
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
  }

  // usando a model (classe) de Negociacao em um método auxiliar - interno
  _criaNegociacao() {
    return  new Negociacao(
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