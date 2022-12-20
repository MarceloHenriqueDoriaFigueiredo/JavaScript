// Os arrays multidimesionais são arrays dentro de outros arrays

let dados = [
    ['teste', 10, true], 
    ['teste2', 7, false, ['JavaScript', true]]
];
// Acessando elementos de um array multidimesional:
console.table(dados[1][3][0]);