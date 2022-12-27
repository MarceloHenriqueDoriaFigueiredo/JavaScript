// Com o parametro rest e nos permitido representa um numero indefinido de argumentos que iremos passar para uma função.
// O paramentro rest sera interpretado com array em um função.

function incentivo(mensagem, ...nomes){
    nomes.map(nomes => console.log(`${mensagem} ${nomes}`))
};
incentivo('Nunca desista dos seus sonhos, idepedente do que aconteça', 'Marcelo', ' Raphael', ' Ana');