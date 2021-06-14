import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';

// parametros para o constructor constructor
const clienteHellen = new Cliente('Hellen Nuni', 19563210144);

const contaCorrenteHellen = new ContaCorrente(0, clienteHellen, 1001);
const contaPoupancaHellen = new ContaPoupanca(50, clienteHellen, 1001);

const conta = new Conta(0, clienteHellen, 1001);
console.log(conta);