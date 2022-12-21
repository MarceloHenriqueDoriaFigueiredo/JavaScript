//Listas
const nomes = ["Marcelo", "Ana", "Aline", 10, true];
console.log(nomes);

//Acessando elementos
const Ana = nomes[1];
console.log(Ana);

//Push
nomes.push("Estela");
console.log(nomes)

//Unshift
nomes.unshift(20);
console.log(nomes);

//Metodo Pop
nomes.pop();
console.log(nomes);

//Reescrevendo valores
nomes[2] = "Gustavo";
console.log(nomes);

//Verificando indice do elemento
console.log(nomes.indexOf(true));

//Ordenando lista alfabeticamente
const indexOfMarcelo = nomes.indexOf("Marcelo");
const sortedNomes = nomes.sort();
console.log(nomes);

//Quantidade de itens da lista
console.log(nomes.length);

//Verificando se a variavel e uma lista
const nomesInArray = Array.isArray(nomes);
console.log(nomesInArray);

// Usando o metodo slice para extrair dados de um array
const lista = [1, 2, 3, 4, 5]
let listaExtraida = lista.slice(0, 3);
console.log(listaExtraida);

// Usando splice para remover elementos de uma array atráves do indice
const lista2 = [10, 20, 30, 40, 50];
let listaExtraida2 = lista2.splice(1, 2);
console.log(listaExtraida2);
console.log(lista2);

// Usanoo splice para remove e também adicionar elementos no array
const list = [100, 200, 300, 400, true, false];
let listExtraida = list.splice(1, 2, '200', '300', '400');
console.log(listExtraida);
console.log(list);