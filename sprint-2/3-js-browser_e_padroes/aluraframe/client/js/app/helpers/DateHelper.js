class DateHelper {
  constructor() {
    // impedindo a instanciação da classe já que ela só tem métodos estaticos
    throw new Error('DateHelper não pode ser instanciada - métdodos estáticos');
  }

  // convertendo a data
  static dataParaTexto(data) {
    return data.getDate()
      + '/' + (data.getMonth() + 1)
      + '/' + data.getFullYear();
  }

  // static - metodos invocados diretamente na classe - não precisa instanciar
  static textoParaData(texto) {
    return new Date (...texto.split('-').map((item, indice) => item - indice % 2));

    // let data = new Date(
    //   ...this._inputData.value.split('-').map((item, indice) => {
    //     if (indice === 1) {
    //       // posição 1 - de mês - retorna o mês - 1
    //       return item - 1;
    //     }
    //     // se não, retorna as datas normais
    //     return item;

    //     return item - indice % 2; // return reduzido
    //   })
    // );
  }
}