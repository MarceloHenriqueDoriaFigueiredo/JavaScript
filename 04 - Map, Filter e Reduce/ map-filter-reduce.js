//Map: trasnformar um array em um totalmente novo
const numeros = [1, 2, 3, 4, 5];
const nummulti = numeros.map(function(num){
    return num * 2;
});
console.log(nummulti);

// Segundo exemplo
let pessoa = [
    { nome: 'Marcelo', idade: 24 },
    { nome: 'Sara', idade: 24 },
    { nome: 'Carlos', idade: 21 }
];

let nomeDasPessoas = pessoa.map(function(nome){
    return nome.nome
});

console.log(nomeDasPessoas);


//Filter: filtrar os elementos
// const idade = [10, 24, 67, 3, 6, 7, 9, 11, 19, 27];
// const evenidades = idade.filter(function(idade){
//     return idade % 2 === 0;
// });
// console.log(evenidades);

// Segundo exemplo
let pessoas = [
    { nome: 'Marcelo', idade: 24 },
    { nome: 'Sara', idade: 24 },
    { nome: 'Carlos', idade: 21 }
];

let pessoasComIdadeDe24Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 24
});

console.log(pessoasComIdadeDe24Anos);


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