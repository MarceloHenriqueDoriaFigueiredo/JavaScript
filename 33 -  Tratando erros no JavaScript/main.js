let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) =>{
        if(typeof chaleiraEstaNoFogao != 'boolean') throw 'Somente o tipo booleano e aceito'
        
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else{
            const mensagemErro = 'e necessario ligar o fogao e colocar a chaleira no mesmo para ferver a agua';
            reject(mensagemErro);
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

let chaleiraEstaNoFogao = 'teste';
let fogaoEstaLigado = true;


async function iniciarProcessoDeFazerCafe(){
    
    // Tratando erro com try e catch
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao,fogaoEstaLigado);
        const cafePassado = await passarOCafe(aguaFervida);
        const cafeTomado = await tomarCafe(cafePassado);
        const xicaraLavada  = await lavarXicara(cafeTomado);

        if (xicaraLavada) console.log('Finalizado o ritual de tomar café, bora trabalhar!')
    }catch(err){
        console.log(err);
    }finally{
        console.log('Finalizado o ritual de tomar café, bora trabalhar!')
    }
};
iniciarProcessoDeFazerCafe();