import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';
import { Cliente } from './Cliente.js';

// usando constructor
const clienteHellen = new Cliente('Hellen Nuni', 19563210144);
const contaCorrenteHellen = new ContaCorrente(0, clienteHellen, 1001);
contaCorrenteHellen.depositar(500);

const contaPoupancaHellen = new ContaPoupanca(50, clienteHellen, 1001);

console.log(contaPoupancaHellen);
console.log(contaCorrenteHellen);