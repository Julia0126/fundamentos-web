
/*
por Tag: getElementByTagName()
por ID: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por seletor: querySelector() - Será mais utilizado, para acessar o DOM do JS
*/

let nome = document.getElementById("nome"); // Conectada ao input - Manipular o DOM pelo ID de um elemento
let email = document.querySelector("#email"); // tem que ter o hashtag no querySelector
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width = "100%";

/*function exibeNome(){
    alert("Seja bem vinde " + nome.value);
}*/

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length <= 2){
        txtNome.innerHTML = "Nome invalido, menos de três caracteres";
        txtNome.style.color = "red";
    } 

    else {
        txtNome.innerHTML = "Nome valido";
        txtNome.style.color = "green";
        nomeOk = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
    }

    else {
        txtEmail.innerHTML = "E-mail válido";
        txtEmail.style.color = "green";
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto");

    if(assunto.value.length >= 100 ){
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
    }  else {
        
        txtAssunto.style.display = "none";
        assuntoOk = true;

        }
    }

    function enviarDados(){
        if (nomeOk == true && emailOk == true && assuntoOk == true){
            alert("Formulário enviado com sucesso!");
        } else {
            alert("Preencha o formulário corretamente");
        }
        
    }

    function mapaZoom(){
       mapa.style.width = "800px";
       mapa.style.height = "600px";

    }

    function mapaNormal(){
        mapa.style.width = "600px";
        mapa.style.height = "400px";

    }