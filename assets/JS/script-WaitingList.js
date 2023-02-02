// Validação senha
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("confirmarSenha");
  
 function validarSenha(){
     if (senha.value !== confirmarSenha.value) {
         confirmarSenha.setCustomValidity("Senhas diferentes!");
     }
     else {
         confirmarSenha.setCustomValidity('');
     }
}
 
// Validação e-mail

function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error');
  
  if(!email.checkValidity()){
    error.innerHTML = "Email invalido";  
  }
   
}

function redefinirMsg(){
  var error = document.querySelector('#error');
  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
  }
}


