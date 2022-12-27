// Com o operador spreed conseguimos expandir os elementos e um objeto interavel.
// Um objeto interavel são objetos que podem ser percorridos como um array ou string.

const pessoa = ['Ana', 'Clara', 'Maria'];
// Usando o spreed
console.log(...pessoa);

// Concatenado arrays com spreed
let pessoas1 = ['Pedro', 'Silvia', 'Marcelo'];
let pessoas2 = ['Henrique', 'Carlos', 'Manuela'];

pessoas1 = [ ...pessoas1, ...pessoas2];
console.log(pessoas1);

// Clonando um objeto utilizando o spreed
const dados1 = {nome: 'Marcelo', age: 24, job: 'dev'};

const objetoClonado = { ...dados1 };
console.log(objetoClonado);