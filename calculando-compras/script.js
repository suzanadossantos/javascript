function ok(){
    var res=document.querySelector("div#res")

    var num1= document.getElementById("valor1")
    var nvalor1= Number(num1.value)

    var num2= document.getElementById("valor2")
    var nvalor2= Number(num2.value)

    var com= nvalor1 > nvalor2
    res.innerHTML="<p></p>"
    
    if(var com){
    res.innerHTML="<p>Você tem o valor correspondente a compra</p>"
    }
}

