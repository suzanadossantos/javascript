function validar(){
    var nome = formulario.nome;
    var sobrenome = formulario.sobrenome;
    var email = formulario.email;
    var telefone = formulario.telefone;

    if(nome.value == ""){
        alert("Nome não informado")

        nome.focus();
    }

    if(sobrenome.value == ""){
        alert("Sobrenome não informado")

        sobrenome.focus();
    }

    if(email.value == ""){
        alert("E-mail não informado")

        email.focus();
    }

    if(telefone.value == ""){
        alert("Telefone não informado")

        telefone.focus();
    }
}