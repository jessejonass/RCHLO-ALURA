import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
  static numeroContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia); // chama o constructor da classe pai
    // modo de chamar atributo estático próprio da classe como todo
    ContaCorrente.numeroContas += 1;
  }
}
