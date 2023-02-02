  $(document).ready(function() {

    function limpa_formulário_cep() {
        $("#st").val("");
        $("#inputBairro").val("");
        $("#inputCidade").val("");
        $("#inputEstado").val("");
    }
    
    $("#inputCEP").blur(function() {

        var cep = $(this).val().replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {

                $("#st").val("...");
                $("#inputBairro").val("...");
                $("#inputCidade").val("...");
                $("#inputEstado").val("...");

                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        $("#st").val(dados.logradouro);
                        $("#inputBairro").val(dados.bairro);
                        $("#inputCidade").val(dados.localidade);
                        $("#inputEstado").val(dados.uf);
                    }
                    else {
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            }
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } 
        else {
            limpa_formulário_cep();
        }
    });
});
