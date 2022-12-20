// São funções que recebem outras funções como parametro.
// Exemplo:

// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 2;
//     let anoDeNascimento = 2022 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--;
//     imprimir(anoDeNascimento);
// }

// let imprimirAnoDeNascimento = anoDeNascimento =>{
//     console.log('Seu ano de nascimento e: ' + anoDeNascimento);
// };

// calcularAnoDeNascimento(24, 1, imprimirAnoDeNascimento);


// Exemplo de uma função que retorna uma função

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    };
};

let dobrar = multiplicar(2);
let duplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(3));
console.log(duplicar(3));
console.log(quadruplicar(3));