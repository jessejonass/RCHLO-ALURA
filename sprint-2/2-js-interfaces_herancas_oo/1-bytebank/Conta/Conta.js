// classe abstrata - não pode ser instanciada
export class Conta {
  // atributos privados - deve estar no constructor
  // _saldo = 0;
  // _cliente;
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor === Conta) {
      throw new Error('Instanciação de objeto do tipo Conta não recomendada');
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  // setters
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  // getters
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // método abstrato - deve ser sempre sobrescrito
  sacar(valor) {
    throw new Error('O método sacar da Conta é abstrato');
  }

  // método privado que foi usado pelo método público
  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    // else
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorRetirado = this.sacar(valor);
    conta.depositar(valorRetirado);
  }
}