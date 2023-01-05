// Modulos são arquivos que podemos exportar e também importar para usar em pontos especificos do nosso codigo. Ou seja reutilizar o codigo em varios lugares sem precisar escrever o trecho de codigo varias vezes.

import { somar, multiplicar } from './operacoes-matematicas.js'
console.log(somar(1, 3));
console.log(multiplicar(2, 5));