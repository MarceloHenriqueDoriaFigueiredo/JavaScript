// let jogo1 = {
//     nome: 'god of war'
// }

// let jogo2 = {
//     nome: 'Zelda'
// }

// let lista = {
//     nome: 'Forza Horizon',
//     ano: 2019,
//     detalhes: ['luta', 'corrida', 'mundo aberto'],
//     games: [jogo1, jogo2]
// };
// console.log(lista);

// // Adicionando um novo jogo na lista

// let jogo3 = {
//     nome: 'fifa'
// };

// lista.games.push(jogo3);

// Objeto dentro de outro objeto

let dadosCliente = {
    nome: 'Marcelo',
    idade: 24,
    pedidos: {
        pedidoUm: 'Sorvete',
        pedidoDois: 'Suco',
        valores: [
            { valor1: 5 },
            { valor2: 10 }
        ]
    }
};

// Acessano ultimo valor
console.log(dadosCliente.pedidos.valores[1].valor2);