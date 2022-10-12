//Não consegue enviar ao front end uma lista ou qualquer coisa de javascript sem transformar em json

//enviar para uma api ou para um servidor precisa converter para json

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
//Convertendo variavel para JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//Convertendo arquivo JSON para um dado JavaScript;
const todosList = JSON.parse(todosJSON);
console.log(todosList);
