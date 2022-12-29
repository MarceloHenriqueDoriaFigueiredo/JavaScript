// O async e o await nos ajudar a trabalhar com promises, com ele fica mais facil de trabalhar e não precisamos utilizar mais o then que agente usava antes quando trabalhava com promises puras.

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

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
//     .then(() =>{
//         return passarOCafe();
//     })

//     .then(() =>{
//         return tomarCafe();
//     })

//     .then(() =>{
//         return lavarXicara();
//     })

//     .then(() =>{
//         console.log('Finalizado ritual do café, bora trabalhar!')
//     })

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao,fogaoEstaLigado);
    const cafePassado = await passarOCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada  = await lavarXicara(cafeTomado);

    if (xicaraLavada) console.log('Finalizado o ritual de tomar café, bora trabalhar!')
};
iniciarProcessoDeFazerCafe();