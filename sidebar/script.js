function toggleMenu(){
    const menu = document.getElementById('aside')

    if(menu.className === "menu-active"){
        menu.className = "menu"
    }else{
        menu.className = "menu-active"
    }
}