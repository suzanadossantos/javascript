function ok(){
    var q1=document.querySelector("input#q1r-2")
    var q2=document.querySelector("input#q2r-3")
    var q3=document.querySelector("input#q3r-1")
    var res= document.querySelector("div#res")

    if(q1.checked){
        res.innerHTML+="Questão 1- correta"
    }else if(q2.checked){
        res.innerHTML+="Questão 2- correta"
    }
}