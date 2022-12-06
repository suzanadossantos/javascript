let ul = document.getElementById('ul');
let elemento = document.getElementsByTagName('li');

// Adicionar tarefas
function adicionarTarefa(){
    let tarefa_text = document.getElementById('itarefa');
    
    if(tarefa_text.value != ''){
       ul.innerHTML += `
       <li onclick="concluirTarefa()">
        ${tarefa_text.value} 
        <span class="material-symbols-outlined apagar" onclick="apagarTarefa(this)">
            delete
        </span>
       </li>` 
       tarefa_text.value ="";
    }else{
        alert('Escreva a sua tarefa!')
    } 

    concluirTarefa()
    apagarTarefa()  
}

// Apagar todas as tarefas
function apagarTudo(){
    ul.innerHTML ="";
}

// Concluir todas as tarefas
function concluirTudo(){
    ul.style.textDecoration = 'line-through';
}

// Apagar tarefa
function apagarTarefa(){
    let button = document.getElementsByClassName("apagar");
    let i;
    for (i = 0; i < button.length; i++) {
        button[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }   
    }
}

// Concluir tarefa
function concluirTarefa(){
    let i;
    for (i = 0; i < elemento.length; i++) {
        elemento[i].onclick = function(){
            let div = this;
            div.style.textDecoration = 'line-through';
        }
    }
}