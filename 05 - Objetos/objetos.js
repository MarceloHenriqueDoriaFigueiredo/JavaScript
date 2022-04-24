//Criando objeto
const pessoa = {
    nome: "Marcelo",
    sobrenome: "Figueiredo",
    idade: 24,
    hobbies: ["Videogame", "ProgWeb"],
    dog: {name: "Stark", idade: 2}
}
//Acessando as informações
const nome1 = pessoa.nome;
const sobrenome1 = pessoa.sobrenome;
const idade1 = pessoa.idade;
const hobbies1 = pessoa.hobbies;

console.log(nome1);
console.log(sobrenome1);
console.log(idade1);
console.log(hobbies1);

//Acessar ultimo valor do objeto pessoa e aprensentar
const read = pessoa.hobbies[1];
console.log(read);

//Destructuring
const {nome, sobrenome, idade, hobbies, dog: {name: dogName}} = pessoa;
console.log(pessoa);

//Alteração nos nomes
const {nome: PrimeiroNomes, sobrenome:SegundoNome, idade:Novaidade, hobbies:NOvoHobbies} = pessoa;
console.log(pessoa);

//Adicionando propriedades no objeto
//pessoa.dog = "Stark";
//console.log(pessoa);

//Acessando o elemento dentro da propriedade
console.log(pessoa.dog.idade);
console.log(dogName);

//Lista com objetos
const todos = [
    {
        id: 20,
        decricao: "Estudar programação",
        completo: true,
    },
    {
        id: 2,
        descriçao: "Praticar esportes",
        completo: false,
    },
    {
        id:3,
        descriçao: "Fazer cursos online",
        completo: false,
    },
];

//Acessando ultimo elemento da lista
const description = todos[2].descriçao;
console.log(description);