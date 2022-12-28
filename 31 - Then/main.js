// O then e uma função e que significa basicamente 'então'. Quando uma função terminar de executa então fazemos alguma coisa, com isso temos certeza que ela terminou de executar e temos tudo pronto para executar o fluxo do nosso codigo.

// let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
//     return new Promise((resolve, reject) =>{
//         if (chaleiraEstaNoFogao && fogaoEstaLigado){
//             console.log('Começando o processo de ferver agua')
//             resolve()
//         } else{
//             console.log('e necessario ligar o fogao e colocar a chaleira no mesmo para ferver a agua')
//             reject()
//         };
//     });
// };

// let chaleiraEstaNoFogao = true
// let fogaoEstaLigado = true

// let passarCafe = () => console.log('passando café');

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe);
// console.log('Fazendo café');

// Outro exemplo do then resolvendo callback rell

let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) =>{
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else{
            console.log('e necessario ligar o fogao e colocar a chaleira no mesmo para ferver a agua')
            reject()
        };
    });
};

let passarOCafe = (aguaFervida) =>{
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true);
    });
};

let tomarCafe = (cafePassado) =>{
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true);
    });
};

let lavarXicara = (cafeTomado) =>{
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xicara')
        resolve(true);
    });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() =>{
        return passarOCafe();
    })

    .then(() =>{
        return tomarCafe();
    })

    .then(() =>{
        return lavarXicara();
    })

    .then(() =>{
        console.log('Finalizado ritual do café, bora trabalhar!')
    })