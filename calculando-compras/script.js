function ok(){
    var valor1 = document.getElementById("valor1")
    var valor2= document.getElementById("valor2")
    var res=document.querySelector("div#res")
    var var1=Number(valor1.value)
    var var2=Number(valor2.value)

    var resultado=var2-var1
    var sobra = var1 - var2

    if((resultado!=0) && (resultado>=0)){
        res.innerHTML=`<p>Você tem dinheiro o suficiente para efetuar a compra!</p>`
        res.innerHTML+=`<p>Sobrou: $${resultado.toFixed(2)}</p>`
    }else if(resultado>=1){
        res.innerHTML=`<p>Infelizmente você não tem dinheiro o suficiente para efetuar a compra.</p>`
        res.innerHTML+=`<p>Você precisa de mais: $${sobra.toFixed(2)}</p>`
    }
}

function reset(){
    var res=document.querySelector("div#res")
    res.innerHTML="<p>dsdddd</p>"
}