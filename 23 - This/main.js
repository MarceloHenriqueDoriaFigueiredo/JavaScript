// // Usando o use strict para que os escopos não fazem
'use strict'
// // Acessando o this
// console.log(this);

// // Acessando o window
// console.log(window);

// // Acessando this no escopo local
// this.name = 'Marcelo';
// function saudar(){
//     console.log('this no contexto da função', this);
//     console.log('Olá ' + this.name);
// };
// saudar();

// Usando this dento de um método
// let usuario = {
//     nome: 'Marcelo',
//     saudar: function(){
//         console.log('this no contexto do metodo', this);
//         console.log('this.nome no contexto do metodo', this.nome);
//     }
// };
// usuario.saudar();

let comida = {
    nome: 'Arroz',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento;
};

console.log(comida);
comida.cozinhar(20);
console.log(comida);