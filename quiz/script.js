function ok(){
    var q1=document.querySelector("input#q1r-2")
    var q2=document.querySelector("input#q2r-3")
    var q3=document.querySelector("input#q3r-1")
    var res= document.querySelector("div#res")
    res.innerHTML="<h2>Respostas</h2>"

    if((q1.checked) && (q2.checked) && (q3.checked)){
        res.innerHTML+="<p>Você acertou todas as questões</p>"
    } else if(q1.checked){
        res.innerHTML+="<p>Você acertou a primeira questão</p>"
    } else if(q2.checked){
        res.innerHTML+="<p>Você acertou a segunda questão</p>"
    }else if(q3.checked){
        res.innerHTML+="<p>Você acertou a terceira questão</p>"
    }
}