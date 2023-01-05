// Usando o export default

function somar(numero1, numero2){
    return numero1 + numero2
};

export default somar

// Segunda forma de usar export default

// export default function somar(numero1, numero2){
//     return numero1 + numero2
// };

// Usando o export nomeada

function multiplicar(numero1, numero2){
    return numero1 * numero2;
};

function divisao(numero1, numero2){
    return numero1 / numero2;
};

export { multiplicar, divisao }