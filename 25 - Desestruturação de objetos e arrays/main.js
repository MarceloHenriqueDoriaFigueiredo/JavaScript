// A destruturação permite extrair variaveis de objetos e arrays

let pessoa = {nome: 'Marcelo', age: 24, sobrenome: 'Figueiredo'};

// Usando a destruturação

let { nome: nome, age: age } = pessoa;
console.log(nome);
console.log(age);

// Destruturando um array

const numeros = [1,2,3,4,5,6,7,8,9];

// Destruturando

const [um , dois, tres, quatro, cinco, seis, sete, oito, nove] = numeros;
console.log(nove);