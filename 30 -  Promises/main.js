// As promises são maneiras mais novas de trabalhar com assicronidade, a ideia das promises e trabalhar com assicronidade de forma sequecial facilitando o tratamento de excessões no nosso codigo caso ocorra algum problema.

// Promises = promessa. Uma promessa de que algo vai ser realizado ou não.

/* 

As promises podem ter quatro estados:

    Pedente: quando a promise foi criada mas não foi executada (Estado inicial)
    Realizada: quando a promise teve sucesso na execução (Resolve)
    Recusada: quando teve alguma falha na execução da promisse (Reject)
    Estabelecida: quando a promise foi realizada ou recusada

*/

// Criando uma promise
// new Promise((resolve, reject) =>{

// })

// Retornando uma promise
let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) =>{
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Começando o processo de ferver agua')
            resolve()
        } else{
            console.log('e necessario ligar o fogao e colocar a chaleira no mesmo para ferver a agua')
            reject()
        };
    });
};

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log('Fazendo cafe');