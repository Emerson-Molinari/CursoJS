// 🔧 Funções que você deve criar:
// listarTarefas() ✔️
// Lista todas as tarefas com status (✔️ ou ❌) ✔️
// adicionarTarefa(titulo) ✔️
// Adiciona uma nova tarefa com concluida: false.✔️
// concluirTarefa(titulo)✔️
// Marca a tarefa com esse título como concluída.✔️
// removerTarefa(titulo)✔️
// Remove a tarefa da lista.✔️
// filtrarTarefasConcluidas()✔️
// Mostra apenas as tarefas com concluida: true.✔️
// verificarSeExiste(titulo)
// Verifica se uma tarefa com esse nome já existe (retorna true ou false).
const tarefas = [
    { titulo: 'Estudar JavaScript', concluida: false },
    { titulo: 'Fazer exercícios', concluida: true },
    { titulo: 'Ler um livro', concluida: false }
];

function mensagem(nome = '', status = false) {
    if (status)
        return `✔️ ${nome}`
    else
        return `❌ ${nome}`
}

function listarTarefas() {
    tarefas.forEach(function (trf) {
        console.log(mensagem(trf.titulo, trf.concluida));
    });
}

function adicionarTarefa(titulo) {
    tarefas.push({
        titulo: titulo,
        concluida: false
    });
}

function concluirTarefa(titulo) {
    const tarefa = tarefas.find(obj => obj.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase());
    if (tarefa) {
        tarefa.concluida = true;
        console.log(`Tarefa "${tarefa.titulo}" marcada como concluída.`);
    } else {
        console.log(`Tarefa "${titulo}" não encontrada.`);
    }
}

function removerTarefa(titulo) {
    const tarefaIndex = tarefas.findIndex(obj => obj.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase());
    if (tarefaIndex !== -1) {
        tarefas.splice(tarefaIndex, 1);
        console.log(`Tarefa "${titulo}" Removida`);
    } else {
        console.log(`Tarefa "${titulo}" não encontrada.`);
    }
}

function filtrarTarefasConcluidas() {
    tarefas.forEach(function (t) {
        if (t.concluida === true) {
            console.log(mensagem(t.titulo, t.concluida));
        }
    });
}

function verificarSeExiste(titulo) {
    const tarefa = tarefas.some(obj => obj.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase());
    if (tarefa) {
        console.log(`A tarefa "${titulo}" Existe`);
    } else {
        console.log(`A tarefa "${titulo}" nao foi encontrada`);
    }
}


listarTarefas();
concluirTarefa('Estudar JavaScript');
adicionarTarefa('Estudar English');
removerTarefa('Ler um livro');
console.log('');
listarTarefas();
console.log('');
filtrarTarefasConcluidas();
verificarSeExiste('Fazer exercícios');
