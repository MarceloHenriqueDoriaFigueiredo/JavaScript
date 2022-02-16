//Truthy e falsy
const x ="";
console.log(!!x);

//0 = false
const y = 0;
console.log(!!y);

//Null e undefined = false
const a = null;
console.log(!!a);

const b = undefined;
console.log(!!b);

//Lista vazia = true
const lista = [];
console.log(!![]);

//Object vazio = true
const objeto = {};
console.log(!!{});

//Checando se a lista tem algo dentro dela;
if (lista.length > 0){
    console.log(lista);
}

//Invertendo booleano para true
const d = [];
console.log(!false);