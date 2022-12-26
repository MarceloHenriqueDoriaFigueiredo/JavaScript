// Template strings são formas de concatenar um texto com variavel ou até mesmo com funções

const imprimirInformacoes = (primeiroNome, segundoNome, idade) => {
    return `Primeiro nome: ${primeiroNome}, o segundo nome e: ${segundoNome}, e a idade e: ${idade}`;
};

console.log(imprimirInformacoes('Marcelo', 'Figueiredo', 24));

// Template string com funcao

console.log(`${imprimirInformacoes('Marcelo', 'Figueiredo', 24)}`);