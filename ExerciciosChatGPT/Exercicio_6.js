// 🚧 Exercício: Gerenciador de Projetos com Tarefas
// Você precisa criar um sistema que gerencie projetos. Cada projeto tem várias tarefas. Crie as funcionalidades abaixo:
// ✏️ Requisitos (funções para criar):
// listarProjetos()
// Lista todos os projetos e suas tarefas (com ✔️ ou ❌ ao lado).
// adicionarProjeto(nome)
// Adiciona um novo projeto com uma lista vazia de tarefas.
// adicionarTarefaAoProjeto(nomeProjeto, tituloTarefa)
// Adiciona uma nova tarefa a um projeto específico.
// concluirTarefa(nomeProjeto, tituloTarefa)
// Marca uma tarefa como concluída dentro do projeto.
// removerTarefa(nomeProjeto, tituloTarefa)
// Remove uma tarefa de um projeto.
// verificarSeProjetoExiste(nomeProjeto)
// Verifica se um projeto existe.

// 💡 Dica:
// Use find() para localizar o projeto, e depois findIndex() ou splice() 
// para editar/remover a tarefa dentro do array tarefas.


const projetos = [
    {
        nome: 'Site Portfolio',
        tarefas: [
            { titulo: 'Criar layout', concluida: false },
            { titulo: 'Publicar no GitHub Pages', concluida: false }
        ]
    },
    {
        nome: 'App de Lista de Compras',
        tarefas: [
            { titulo: 'Criar estrutura de dados', concluida: true },
            { titulo: 'Adicionar botão de remover', concluida: false }
        ]
    }
];

function listarProjetos() {
    projetos.forEach(function (projeto) {
        console.log(`   -> ${projeto.nome}`)
        projeto.tarefas.forEach(function (tarefa) {
            verificarTarefa(tarefa);
        })
    })
}

function verificarTarefa(tarefa) {
    console.log(`A Tarefa`);
}

function verificarProjeto(projeto = '') {
    return projetos.some(pjt => pjt.nome.toLocaleLowerCase() === projeto.toLocaleLowerCase());
}

listarProjetos();
console.log(verificarProjeto(`Site Portfolio`));