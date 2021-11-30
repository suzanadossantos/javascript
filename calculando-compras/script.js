function ok(){
    var res=document.querySelector("div#res")
    var num1= document.getElementById("valor1")
    var nvalor1= Number(num1.value)
    var num2= document.getElementById("valor2")
    var nvalor2= Number(num2.value)
    
    if(nvalor2 == 0){
    res.innerHTML+="jfc"
    }
}

