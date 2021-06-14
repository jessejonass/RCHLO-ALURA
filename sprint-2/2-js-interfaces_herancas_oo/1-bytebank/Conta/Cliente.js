export class Cliente {
  // declaracao de atributos dentro do constructor por boas práticas
  // nome;
  // _cpf;

  get cpf() {
    return this._cpf;
  }

  // constructor
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
