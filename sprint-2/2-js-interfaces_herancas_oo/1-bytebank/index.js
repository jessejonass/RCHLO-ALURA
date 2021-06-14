import { Cliente } from './Conta/Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';

import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Hellen', 10000, 12345678900);
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Nuni', 5000, 12345678901);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Pogba', 78912345600, '456');

const diretorLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteLogado = SistemaAutenticacao.login(gerente, '123');
const clienteLogado = SistemaAutenticacao.login(cliente, '456');

console.log(diretorLogado);
console.log(gerenteLogado);
console.log(clienteLogado);
