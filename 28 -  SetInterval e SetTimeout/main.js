// O settimeout executa um bloco de codigo em um determinado periodo de tempo.
// O setinterval executa um bloco de codigo em um intervalo de tempo.

// Usando o settimeout
// setTimeout(function(){
//     alert('Olá')
// }, 3000)

// // Usando o setinterval
// setInterval(function(){
//     console.log('Executando a cada 2 segundos')
// }, 2000)

// Parando a execução do setinterval
const idDoIntervalo = setInterval(function(){
    console.log('Executando')
}, 2000);
console.log(idDoIntervalo);
clearInterval(idDoIntervalo);

// Parar a execução do settimeout
clearTimeout(idDoIntervalo);