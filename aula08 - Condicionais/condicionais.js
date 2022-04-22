//If e else
const sum = 2 + 4;
if (sum === 4){
    console.log("A soma dos valores e 4")
} else if (sum === 6){
    console.log("A soma dos valores esta correto")
} 
else {
    console.log("A soma dos valores esta errada")
}

//Else if
const num = 5 + 5;
if (num === 11){
    console.log("A soma dos valores esta errado");
} else if (num == 10){
    console.log("A soma dos valores esta certo");
}

//Operador and &&
const num1 = 10;
const num2 = 20;
if (num1 === 10 && num2 === 20){
    console.log("Os valores estão corretos");
}

//Operador or ||
if (num1 === 10 || num2 === 30){
    console.log("num1 e 10 e o num2 e 10")
}

//Ternary Operation
const som1 = 30 + 30;
let number = som1 === 60 ? 60 : 50;
if (som1 === 60){
    number = 60;
}else{
    number = 4;
}
console.log(number)

//Switch
const cars = "Ford";
 switch (cars) {
     case "Tesla":
         console.log("Tesla e muito bonito");
         break;
     case "Ford":
         console.log("Os carros ford são muito bons");
         break;
     case "Mercedes":
         console.log("O carros Mercedes são rapidos");
         break;
 }