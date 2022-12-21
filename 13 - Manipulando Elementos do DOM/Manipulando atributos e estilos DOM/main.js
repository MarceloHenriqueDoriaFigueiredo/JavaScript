function alterarCorDeFundoPrimeiroPost(){
    let posts = document.querySelector('.post');
    
    let primeiroPost = posts
    
    console.log('Primeiro post', primeiroPost);

    primeiroPost.style.classList = '.fonte-grande';
};

function aumentarFonteSegundoPost(){
    let textoSelecionado = document.querySelector('.texto-post');
    let text = textoSelecionado;
    // Adicionando classe ao elemento
    text.classList.add('fonte-grande');
}

function marcarRadio(genero){
    let radioMasculino = document.querySelector('#masculino');
    let radioFeminino = document.querySelector('#feminino');

    if (genero === 'M'){
        radioMasculino.checked = true;
    } else if (genero === 'F'){
        radioFeminino.checked = true;
    }
};