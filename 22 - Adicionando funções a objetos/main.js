// Criando metodos dentro do objeto

const lista = {
    nome: 'Marcelo',
    excluir: function(){
        console.log('O usuario ' + this.nome + ' Foi excluido do sistema');
    }
};
console.log(lista);
lista.excluir();

// const dados = {
//     name: 'Marcelo',
//     comparacao: function(){
//         if (this.name === 'Marcelooo'){
//             console.log("Seja bem vindo Marcelo");
//         } else{
//             console.log('Esse usuario não e o Marcelo');
//         };
//     }
// };
// dados.comparacao();