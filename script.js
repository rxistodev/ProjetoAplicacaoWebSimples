const formulario = document.querySelector("form");

const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
const itel = document.querySelector(".tel");


function cadastrar () {

    fetch( "http://localhost:8080/cadastrar",
        {

            headers: {
                'Accept': 'application/json'
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify ({
                nome: inome.value,
                email: iemail.value,
                senha: isenha.value,
                telefone: itel.value
            })
        })
        .then(function (res) { console.log(res) })

        .catch(function (res) { console.log(res) })      
   
};


function limpar () {
    inome.value = "";
    iemail.value = "";
    isenha.value = "";
    itel.value = "";

};


formulario.addEventListener('submit' , function (event) {
    event.preventDefault();

    cadastrar();
    limpar ();
});