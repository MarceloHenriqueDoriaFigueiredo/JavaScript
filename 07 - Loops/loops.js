//For
// quando quiser repetir um trecho de codigo varias vezes
for (let index = 0; index < 10; index ++){
    console.log(index);
};

//For loop em uma lista
const carros = ["Ferrari", "Ford", "Volkswager"];
for (let i = 0; i < carros.length; i++){
    console.log(carros[i]);
};

//For off loop
for (let car of carros){
    console.log(car);
};

//ForEach loop
carros.forEach(function(car, index){
    console.log(car);
    console.log(index);
});

//While loop
let index = 0;
while (index < 10){
    console.log("O index e menor que dez");
    index ++;
};

//For in loop
const dados = {
    nome: "Marcelo",
    idade: 21,
};
for (propery in dados){
    console.log(dados[propery]);
};