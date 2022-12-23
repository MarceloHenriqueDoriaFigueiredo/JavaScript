const intensPerguntasERespostas = document.querySelectorAll('.item');

intensPerguntasERespostas.forEach(function(itens){
    itens.addEventListener("click", function(){
        const itensAtivoAtual = document.querySelector('.ativo')
        if (itensAtivoAtual){
            itensAtivoAtual.classList.remove('ativo');
        }

        itens.classList.add('ativo');
    });
});