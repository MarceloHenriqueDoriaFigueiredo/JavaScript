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