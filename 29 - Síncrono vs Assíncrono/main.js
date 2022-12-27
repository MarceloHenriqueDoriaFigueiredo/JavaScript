// Um codigo sicrono segue um fluxo linear de execução ou seja executa um codigo de cima para baixo executando uma instrução depois que a anterior for executada.

// Já um codigo assicrono não segue esse fluxo linear dessa forma ela não espera a execução do codigo anterior para que a mesma execute.

// Exemplo de codigo sicrono
// function colocarAguaParaFerver(){
//     console.log('Colocar água para ferver');
// };

// function prepararParaPassarOCafe(){
//     console.log('Pegar o pó do cafe');
//     console.log('Pegar o filtro do cafe');
//     console.log('Colocar o filtro no cafe');
//     console.log('Colocar o filtro em cima da xicara');
// }

// function passarOCafe(){
//     console.log('Passando o cafe')
// }

// colocarAguaParaFerver();
// prepararParaPassarOCafe();
// passarOCafe();

// Exemplo de codigo assicrono
function colocarAguaParaFerver(){
    setTimeout(()=>{
        console.log('Agua ferveu');
        passarOCafe()
    }, 5000);
};

function prepararParaPassarOCafe(){
    console.log('Pegar o pó do cafe');
    console.log('Pegar o filtro do cafe');
    console.log('Colocar o filtro no cafe');
    console.log('Colocar o filtro em cima da xicara');
}

function passarOCafe(){
    console.log('Passando o cafe')
}

colocarAguaParaFerver();
prepararParaPassarOCafe();