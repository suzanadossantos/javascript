function enviar(){
    var q2= document.querySelector("input#q2")
    var res= document.querySelector("div#res")
    res.innerHTML=""

    if(q2.checked){
        res.innerHTML+="<p>Parabéns! Você acertou!</p>"
        res.innerHTML+="<p>A resposta era Guepardo.</p>"
    } else{
        res.innerHTML+="<p>Que pena, você errou.</p>"
        res.innerHTML+="<p>A resposta era Guepardo.</p>"
    }
}