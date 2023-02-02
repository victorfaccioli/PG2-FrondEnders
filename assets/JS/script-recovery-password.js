// Aqui está o regex para que possa validar o email.
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// Função de validação.
$(document).ready(function() {
  $("#email").on("input", function() {
    var email = $(this).val();
    if(email === '') {
      $(this).removeClass("custom-input").removeClass("custom-error");
      $("#error").hide();
    } else if(emailRegex.test(email)) {
      $(this).addClass("custom-input").removeClass("custom-error");
      $("#error").removeClass("custom-error").hide();
    } else {
      $(this).removeClass("custom-input").addClass("custom-error");
      $("#error").addClass("custom-error").show().html("Email inválido");
    }
  });
});

// Aqui está sendo criada a função de botão para que possa ser enviado o formulário somente quando estiver tudo validado.
function recuperarBtn () {
  const user = document.getElementById('user').value
  const emaill = document.getElementById('email').value
  if (user === '' && emaill === ''){
    alert('Preencher usuário ou email.')
  }
  else if(!emailRegex.test(emaill)){
    alert('Email inválido!')
  }
  else{
    alert('Formulário enviado com sucesso!')  
  }
};

