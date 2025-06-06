const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listaTarefa = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value);
    }
})

function criaTarefa(textInput){
    const li = criaLi();
    li.innerText = textInput;
    listaTarefa.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    li.appendChild(botaoApagar);
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

btnTarefa.addEventListener('click',function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = listaTarefa.querySelectorAll('li');
    const listaDeTaferas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTaferas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTaferas);
    localStorage.setItem('Taferas', tarefasJson);
    console.log(tarefasJson);
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('Taferas');
    const listaDeTaferas = JSON.parse(tarefas);

    for(let tarefa of listaDeTaferas){
        criaTarefa(tarefa);
    }
}

addTarefasSalvas();