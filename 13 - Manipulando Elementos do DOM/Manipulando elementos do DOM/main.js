function adicionarComentario(){
    let inputComentario = document.querySelector('#input').value;
    let novosComentarios = document.querySelector('#novos-comentarios')
    novosComentarios.innerHTML += `<p>Comentario: ${inputComentario}</p>`;
}