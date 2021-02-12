const botaoDeEnvio = document.getElementById("botaoEnviar");
const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const fotoAda = document.getElementById("foto-ada");

function validaFormulario(event) {
    event.preventDefault();

    if (inputNome.value == "" || inputEmail.value == "") {
        alert("porfavor preencha os campos nome e email!");
    } else {
        alert("Prontinho voce recebera as novidades por email.");
    }
}

botaoDeEnvio.addEventListener("click", validaFormulario);

fotoAda.addEventListener("mouseenter", function() {
    console.log("voce esta com o mouse encima da barbie");
});

fotoAda.addEventListener("mouseleave", function() {
    console.log("voce tirou o mouse de cima da barbie");
});