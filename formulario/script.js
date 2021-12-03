function ok(){
    var nome= document.querySelector("input#nome")
    var telefone= document.querySelector("input#tel")
    var email= document.querySelector("input#email")

    if(nome.value == ""){
        alert("Nome não informado")
    }else if(telefone.value == 0){
        alert("Telefone não informado")
    }else if(email.value == ""){
        alert("Email não informado")
    }else{
        alert("Formulário enviado!")
    }
}