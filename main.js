const checkbox = document.querySelector("#check");
const listaMenu = document.querySelector("#listaMenu");

checkbox.addEventListener("change", function () {
    if (checkbox.checked == true) {
        listaMenu.classList.remove('inativa');
        listaMenu.classList.add('ativa');
    } else {
        listaMenu.classList.remove('ativa');
        listaMenu.classList.add('inativa');
    }
});
