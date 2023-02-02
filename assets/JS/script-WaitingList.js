$(document).ready(function() {
  // Adiciona um evento de input aos elementos com as IDs "senha" e "confirmarSenha"
  $('#senha, #confirmarSenha').on('input', function() {
    // Verifica se ambos os campos não estão vazios
    if ($('#senha').val() !== "" && $('#confirmarSenha').val() !== "") {
      // Verifica se o valor dos campos são iguais
      if ($('#senha').val() === $('#confirmarSenha').val()) {
        // Remove a classe invalid-border e adiciona a classe valid-border a ambos os campos
        $('#senha, #confirmarSenha').removeClass('invalid-border');
        $('#senha, #confirmarSenha').addClass('valid-border');
      } else {
        // Remove a classe valid-border e adiciona a classe invalid-border a ambos os campos
        $('#senha, #confirmarSenha').removeClass('valid-border');
        $('#senha, #confirmarSenha').addClass('invalid-border');
      }
    } else {
      // Remove as classes valid-border e invalid-border de ambos os campos
      $('#senha, #confirmarSenha').removeClass('valid-border');
      $('#senha, #confirmarSenha').removeClass('invalid-border');
    }
  });
});
// Validação e-mail

// Espera até que o documento tenha terminado de carregar
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