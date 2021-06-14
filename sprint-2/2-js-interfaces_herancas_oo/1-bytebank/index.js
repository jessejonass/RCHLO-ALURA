import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';
import { Cliente } from './Cliente.js';

// parametros para o constructor constructor
const clienteHellen = new Cliente('Hellen Nuni', 19563210144);

const contaCorrenteHellen = new ContaCorrente(0, clienteHellen, 1001);
contaCorrenteHellen.depositar(500);
contaCorrenteHellen.sacar(100);

const contaPoupancaHellen = new ContaPoupanca(50, clienteHellen, 1001);
contaPoupancaHellen.depositar(100);
contaPoupancaHellen.sacar(10);

console.log(contaCorrenteHellen);
console.log(contaPoupancaHellen);