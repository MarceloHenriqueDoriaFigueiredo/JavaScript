//GetElementByid
const adusertext = document.getElementById("add-user");
console.log(adusertext);

//InnerText
adusertext.innerText = "Seja bem vindo";

//QuerySelector
const adusertexto = document.querySelector("#add-user");
console.log(adusertexto);

//Alterando elemento no QuerySelector
adusertexto.textContent = "Olá pessoal";

//Selecionando mais de um elemento
const myform = document.querySelector(".container #my-form");
console.log(myform);

//Selecionando multiplos elementos
const allitens = document.querySelectorAll(".item");
console.log(allitens);

//ClassName
const alitens = document.getElementsByClassName("item");
console.log(alitens);

//GetElementByTagname
const tag = document.getElementsByTagName("li");
console.log(tag);