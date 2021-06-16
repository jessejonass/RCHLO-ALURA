import { Cliente } from './Cliente.js';

export class ContaCorrente {
  // atributos estáticos
  static numeroContas = 0;

  agencia;

  // atributos privados
  _saldo = 0;
  _cliente;

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

  // constructor
  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;

    // modo de chamar atributo estático da classe como todo
    ContaCorrente.numeroContas += 1;
  }

  // métodos
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
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
}
