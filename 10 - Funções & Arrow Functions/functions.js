function sum(a,b){
    console.log(a + b);
}
sum(10, 1);

//Return
function soma(a,b,c){
    return a+b+c;
}
const somaval = soma(5, 9, 10);
console.log(somaval);

//Definindo valores para parametros
function divisão(a, b = 10){
    return a / b;
}
const divresu = divisão(100);
console.log(divresu);

//Arrow Functions
const multarrow = (a, b, c) => a * b * c; 
const multresutado = multarrow(5, 5, 5);
console.log(multresutado);

//Arrow function com o return
const dimarrow = (a, b, c) =>{
    return a - b - c;
}
const dimresultado = dimarrow(90, 20, 20);
console.log(dimresultado);