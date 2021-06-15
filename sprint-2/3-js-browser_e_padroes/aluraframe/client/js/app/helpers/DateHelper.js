class DateHelper {

  // convertendo a data
  dataParaTexto(data) {
    return data.getDate()
      + '/' + (data.getMonth() + 1)
      + '/' + data.getFullYear();
  }

  textoParaData(texto) {
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