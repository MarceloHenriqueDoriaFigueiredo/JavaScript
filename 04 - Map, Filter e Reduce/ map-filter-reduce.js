


// Reduce 
const num1 = [1, 2, 3, 10, 20, 30];
const sumnum1 = num1.reduce(function(num1, acumulation){
    return acumulation + num1;
}, 0);
console.log(sumnum1);

// Segundo exemplo

let ordens = [
    {cliente: 'Marcelo', tipo: 'Compra', quantidade: 100, ativo: 'APLLE'},
    {cliente: 'Marcelo', tipo: 'Compra', quantidade: 100, ativo: 'APLLE'},
    {cliente: 'Marcelo', tipo: 'Compra', quantidade: 100, ativo: 'APLLE'}
]

let quantidadeDeOrdens = ordens.reduce(function(quantidadeDeHoras, ordem){
    return quantidadeDeHoras + ordem.quantidade;
}, 0);

console.log(quantidadeDeOrdens);