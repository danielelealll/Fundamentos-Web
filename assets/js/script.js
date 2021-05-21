/*
Case Sensitive = reconhece letras maiúsculas e minúsculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 2) {
        textAssunto.innerHTML = '<h1>Teste h1</h1>'
    }
}