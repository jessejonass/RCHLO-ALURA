import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
  static numeroContas = 0;

  constructor(cliente, agencia) {
    // super - referencia o construtor da classe mãe;
    super(0, cliente, agencia);

    // modo de chamar atributo estático próprio da classe
    ContaCorrente.numeroContas += 1;
  }

  teste() {
    // referencia um metodo da classe mãe
    super.teste();

    console.log('teste na classe contacorrente');
  }

  // sobrescrita de método - método já existente na classe mãe
  sacar(valor) {
    let taxa = 1.1;
    const valorSacado = taxa * valor;

    console.log('Tentando efetuar saque da conta corrente...');

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }
}
