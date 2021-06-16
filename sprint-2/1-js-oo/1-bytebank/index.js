import { ContaCorrente } from './ContaCorrente.js';
import { Cliente } from './Cliente.js';

// usando constructor
const cliente1 = new Cliente('Hellen Nuni', 19563210144);
const cliente2 = new Cliente('Jessé', 51488710325);

const contaHellen = new ContaCorrente(1001, cliente1);
const contaJesse = new ContaCorrente(1002, cliente2);

contaHellen.depositar(500);
contaHellen.transferir(200, contaJesse);

console.log(contaHellen);
console.log(ContaCorrente.numeroContas);