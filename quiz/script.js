function ok(){
    var q1=document.querySelector("input#q1r-2")
    var q2=document.querySelector("input#q2r-3")
    var q3=document.querySelector("input#q3r-1")
    
    if((q1.checked) && (q2.checked) && (q3.checked)){
        alert("Você acertou todas as questões!")
    } else if((q1.checked) && (q2.checked)){
        alert("Você acertou a primeira e a segunda questão!")
    } else if((q1.checked) && (q3.checked)){
        alert("Você acertou a primeira e a terceira questão!")
    }else if((q2.checked) && (q3.checked)){
        alert("Você acertou a segunda e a terceira questão!")
    } else if(q1.checked){
        alert("Você acertou a primeira questão!")
    }else if(q2.checked){
        alert("Você acertou a segunda questão!")
    }else if(q3.checked){
        alert("Você acertou a terceira questão!")
    }else{
        alert("Infelizmente você não acertou nenhuma questão")
    }
}
