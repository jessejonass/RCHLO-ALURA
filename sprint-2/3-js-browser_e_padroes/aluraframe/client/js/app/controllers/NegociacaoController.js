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
  }

  adicionar(e) {
    // prevenindo comportamento padrão do formulário - que inclui reload
    e.preventDefault();

    // convertendo data do input para data correta usando regex
    // let data = new Date(this._inputData.value.replace(/-/g, ','));

    // passando para o constructor da model (classe) de negociação
    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value,
    );
    
    console.log(negociacao);
    console.log(DateHelper.dataParaTexto(negociacao.data));

    // adicionar a negociação em uma lista
  }
}