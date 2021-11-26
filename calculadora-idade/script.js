function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex [0].checked){
            gênero = "homem"
            if(idade>=0 && idade <10){
                // Criança
                img.setAttribute("src" , "imagens/bebe-menino.png")
            } else if(idade < 21){
                // Jovem
                img.setAttribute("src" , "imagens/jovem-homem.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src" , "imagens/adulto-homem.png")
            } else {
                // Idoso
                img.setAttribute("src" , "imagens/senhor-homem.png")
            }
        } else if(fsex[1].checked) {
            gênero = "mulher"
            if(idade>=0 && idade <10){
                // Criança
                img.setAttribute("src" , "imagens/bebe-menina.png")
            } else if(idade < 21){
                // Jovem
                img.setAttribute("src" , "imagens/jovem-mulher.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src" , "imagens/adulto-mulher.png")
            } else {
                // Idoso
                img.setAttribute("src" , "imagens/senhora-mulher.png")
            }
        }
        
         res.style.textAling= 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos` 
         res.appendChild(img)
    }



}
