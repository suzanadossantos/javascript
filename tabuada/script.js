function tabuada(){
    var num = document.getElementById("num1")
    var tab = document.getElementById("seltab")

    if(num.value.length == 0){
        alert("Insira um número!")
    }else if(num.value <= -1){
        alert("Insira um número válido!")
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""

        while(c <=10){
            var item = document.createElement("option")
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}