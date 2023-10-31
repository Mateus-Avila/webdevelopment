const checkbox = document.querySelector("#check");
const listaMenu = document.querySelector("#listaMenu");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        listaMenu.classList.remove('inativa');
    } else {
        listaMenu.classList.add('inativa');
    }
});
