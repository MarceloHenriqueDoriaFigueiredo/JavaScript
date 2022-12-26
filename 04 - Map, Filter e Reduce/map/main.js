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