//Map
const numeros = [1, 2, 3, 4, 5];
const nummulti = numeros.map(function(num){
    return num * 2;
});
console.log(nummulti);

//Filter
const idade = [10, 24, 67, 3, 6, 7, 9, 11, 19, 27];
const evenidades = idade.filter(function(idade){
    return idade % 2 === 0;
});
console.log(evenidades);

//Reduce
const num1 = [1, 2, 3, 10, 20, 30];
const sumnum1 = num1.reduce(function(num1, acumulation){
    return acumulation + num1;
}, 0);
console.log(sumnum1);
