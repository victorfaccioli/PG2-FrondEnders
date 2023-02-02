
document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('pass').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('pass').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('pass').type = 'password';
  });

$(document).ready(function() {
  
  // Adiciona um evento "input" para o elemento "email"
  $("#email").on("input", function() {
    
    // Define regex para validar de e-mail
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Armazena o valor do elemento de entrada com ID "email" na variável "email"
    var email = $(this).val();
    
    // Verifica se o email é vazio
    if(email === '') {
      
      // Remove as classes "custom-input" e "custom-error"
      $(this).removeClass("custom-input").removeClass("custom-error");
      
      // Oculta o elemento "error"
      $("#error").hide();
      
    // Verifica se o email é válido 
    } else if(emailRegex.test(email)) {
      
      // Adiciona a classe "custom-input" e remove a classe "custom-error"
      $(this).addClass("custom-input").removeClass("custom-error");
      
      // Remove a classe "custom-error" e oculta o "error"
      $("#error").removeClass("custom-error").hide();
      
    // Se o email for inválido
    } else {
      
      // Remove a classe "custom-input" e adiciona a classe "custom-error"
      $(this).removeClass("custom-input").addClass("custom-error");
      
      // Adiciona a classe "custom-error", mostra o elemento com ID "error" e define como "Email inválido"
      $("#error").addClass("custom-error").show().html("Email inválido");
    }
  });
});
