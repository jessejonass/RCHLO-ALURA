import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(cliente) {
    super(0, cliente, 100);
  }

  // sacar precisa ser criado, pois o método sacar de conta é abstrato
  sacar(valor) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}