//validação email para recuperação de senha
$(document).ready(function() {
  $("#email").on("input", function() {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
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