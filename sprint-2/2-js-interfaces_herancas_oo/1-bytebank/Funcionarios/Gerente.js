import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf); // passar para a instância superior
    this._bonificacao = 1.1;
  }
}