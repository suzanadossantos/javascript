function ok(){
    var nome= document.getElementById('musica').value
    var adic= document.querySelector("div#music")

    if(nome != ""){
        adic.innerHTML+="<ul><ul>"
        adic.innerHTML+=`<li>${nome}</li>`
    }else{
        alert("Nada foi adicionado!")
    }  
}
//max-width: 600px;
    //padding: 2%;
    //margin: auto;
    //background-color: rgba(43, 40, 39, 0.589);
    //text-align: center;
    //border-radius: 10px;
    //border: 1px solid;