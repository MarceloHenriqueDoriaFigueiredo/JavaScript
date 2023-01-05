// Exportação padrão (export default): Uma exportação por arquivo.

// Exportação nomeada: Podemos ter varias exportações nomeadas pro aqruivo.

// Por sugestão e melhor utilizar a exportação nomeada.

import somar from "./operacoes-matematicas.js";
console.log(somar(1, 2));

import { multiplicar, divisao } from "./operacoes-matematicas.js";
console.log(multiplicar(2, 4));
console.log(divisao(10, 2));