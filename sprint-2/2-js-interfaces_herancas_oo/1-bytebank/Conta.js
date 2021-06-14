export class Conta {
  // atributos privados - deve estar no constructor
  // _saldo = 0;
  // _cliente;
  constructor(saldoInicial, cliente, agencia) {
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

  // métodos
  sacar(valor) {
    let taxa = 1;
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorRetirado = this.sacar(valor);
    conta.depositar(valorRetirado);
  }

  teste() {
    console.log('teste na classe conta normal');
  }
}