import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { Cliente } from './Conta/Cliente.js';
import { ContaSalario } from './Conta/ContaSalario.js';

// parametros para o constructor constructor
const clienteHellen = new Cliente('Hellen Nuni', 19563210144);

const contaCorrenteHellen = new ContaCorrente(0, clienteHellen, 1001);
const contaPoupancaHellen = new ContaPoupanca(50, clienteHellen, 1001);
const contaSalarioHellen = new ContaSalario(clienteHellen);

contaSalarioHellen.depositar(100);
contaSalarioHellen.sacar(10);

console.log(contaSalarioHellen);