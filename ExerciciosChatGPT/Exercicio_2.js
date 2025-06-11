// Desafio: Lista de Alunos Aprovados
// Você tem uma lista de alunos com nome e nota.Crie um código que:
// Mostre todos os alunos com suas notas. ok
// Filtre apenas os alunos aprovados(nota maior ou igual a 7).
// Mostre os nomes dos aprovados em letras maiúsculas.
// Mostre quantos alunos foram aprovados e reprovados.

let numeroAprovados = 0;
let numeroReprovados = 0;

const alunos = [
    { nome: 'Lucas', nota: 8 },
    { nome: 'Larissa', nota: 6 },
    { nome: 'João', nota: 9 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Luan', nota: 7 }
];

function alunosCadastrados() {
    console.log('Alunos Cadastrados:')
    for (let i = 0; i < alunos.length; i++) {
        console.log(`- ${alunos[i].nome}: ${alunos[i].nota}`);
    }
    console.log('')
}

function calcularNotas() {
    console.log('Aprovados:');
    const aprovados = alunos.filter(aluno => aluno.nota >= 7);

    //forEach
    aprovados.forEach(function(nome){
        console.log(nome.nome.toLocaleUpperCase());
    });

    // for (let i = 0; i < aprovados.length; i++) {
    //     console.log(aprovados[i].nome.toLocaleUpperCase());
    // }
    numeroAprovados = aprovados.length;
    numeroReprovados = alunos.length - aprovados.length;
}

alunosCadastrados();
calcularNotas();
console.log('')
console.log(`Alunos Aprovados: ${numeroAprovados}`)
console.log(`Alunos Reprovados: ${numeroReprovados}`)



