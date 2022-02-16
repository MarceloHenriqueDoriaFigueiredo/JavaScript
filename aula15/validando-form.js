const nameinput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const subimmitbutton = document.querySelector("#submit-button");
const erromensage = document.querySelector(".msg");
const items = document.querySelector(".items");

subimmitbutton.addEventListener("click", (evento) =>{
    evento.preventDefault()

    const namevalue = nameinput.value;
    const emailvalue = emailinput.value;

    if (namevalue === "" || emailvalue === ""){
        erromensage.textContent = "Dados estão incompletos, por favor complete os campos"
        erromensage.classList = "error";
        setTimeout(() => {
            erromensage.textContent = "";
            erromensage.classList = "";
        }, 3000);
        return;
    }

    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${namevalue} <br/> Email: ${emailvalue}`
    items.appendChild(li);

    nameinput.value = "";
    emailinput.value = "";
});
