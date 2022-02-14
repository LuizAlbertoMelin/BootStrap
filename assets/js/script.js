let nome = window.document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk= false
let emailOk= false
let assuntoOk= false

function validaNome(){
  let txtNome = document.querySelector('#txtNome')
  if(nome.value.length < 3){
    txtNome.innerHTML = 'nome invalido'
    txtNome.style.background = '#ff000046'
    txtNome.style.color = '#ffff' 
  } else{
    txtNome.innerHTML = 'nome valido'
    txtNome.style.background = '#00800045'
    txtNome.style.color = '#ffff' 
    nomeOk = true
  }
}

function validaEmail(){
  let txtEmail = document.querySelector ('#txtEmail')
  if (email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.background = '#00800045'
    txtEmail.style.color = '#ffff' 
  } else{
    txtEmail.innerHTML = 'Email inválido'
    txtEmail.style.background = '#ff000046'
    txtEmail.style.color = '#ffff' 
    emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >= 100){
    txtAssunto.innerHTML = 'texto muito grnade, digite no maximo 100 caracteres'
    txtAssunto.style.background = '#ff000046'
    txtAssunto.style.color = '#ffff'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk == true){
    alert ('formulario enviado')
  } else{
    alert ('preencha o formulario corretamente')
  }
}