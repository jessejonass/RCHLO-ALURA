import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
  static numeroContas = 0;

  constructor(cliente, agencia) {
    // super - referencia o construtor da classe mãe;
    super(0, cliente, agencia);

    // modo de chamar atributo estático próprio da classe
    ContaCorrente.numeroContas += 1;
  }

  // sobrescrita de método - método já existente na classe mãe
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa); // posso usar super._sacar();
  }
}
