import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf); // passar para a instância superior
    this._bonificacao = 2;
  }
}