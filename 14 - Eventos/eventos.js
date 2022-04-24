const submitbotton = document.querySelector("#submit-button");
const myform = document.querySelector("#my-form");
const dados = document.querySelector("#name");
const dados2 = document.querySelector("#email");
const items = document.querySelector(".items");
const body = document.querySelector("body");

submitbotton.addEventListener("click", function(event){
    event.preventDefault();

    const dadosvalue = dados.value;
    const dadosvalue2 = dados2.value;   
    
    if (dadosvalue === "" || dadosvalue2 === ""){
        return alert("Por favor prenchar todos os campos")
    }

    myform.style.background = "Red"
    items.firstElementChild.textContent = dadosvalue;
    items.children[1].textContent = dadosvalue2;
    body.style.background = "White";
});

//Usando target.value;
// dados.addEventListener("Change", function(event){
//    console.log(event.target.value);
// })