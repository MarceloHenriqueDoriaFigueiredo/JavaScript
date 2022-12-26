// Filter filtrar os elementos
const idade = [10, 24, 67, 3, 6, 7, 9, 11, 19, 27];
const evenidades = idade.filter(function(idade){
    return idade % 2 === 0;
});
console.log(evenidades);

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