const informações = [
    {
        name: "Marcelo",
        age: 24,
        descrição: "Formado em gestão de TI"
    },

    {
        name: "Stark",
        age: 27,
        descrição: "Formado no curso tecnico de suporte de informatica",
    },
];
const infoJSON = JSON.stringify(informações);
console.log(infoJSON);

// Convertendo JSON para lista
const infoLIst = JSON.parse(infoJSON)
console.log(infoLIst)