// O fetch no JavaScript e um metodo que vai servir para trabalhar com APIs onde esse fetch vai retorna uma promise e no resolve dessa promise vai ter o objeto do retorno dessa API.

document.querySelector('#tirar-carta').addEventListener('click', ()=>{
    tirarUmaCartaDoBaralho();
});

async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url);
    return await resposta.json();
};

async function tirarCartaDoBaralho(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    const resposta = await fetch(url);
    return await resposta.json();
};

async function tirarUmaCartaDoBaralho(){
    const baralho = await criarBaralhoEmbaralhado();
    const carta = await tirarCartaDoBaralho(baralho.deck_id);
    const imagemCarta = carta.cards[0].image;
    document.querySelector('#carta').src = imagemCarta;
};

tirarUmaCartaDoBaralho();