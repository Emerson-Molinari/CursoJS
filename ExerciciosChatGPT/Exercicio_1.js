// Exercício: Cadastro e filtro de nomes
// Crie um script que faça o seguinte:
// Peça ao usuário para cadastrar 5 nomes (você pode simular com um array fixo).
// Peça para o usuário digitar uma letra (pode simular também).
// Crie uma função que filtre e retorne todos os nomes que começam com essa letra (maiúscula ou minúscula).
// Mostre no console:
// Os nomes cadastrados.
// A letra digitada.
// Os nomes que começam com essa letra.

const Nomes = ['Lucas', 'Larissa', 'João', 'Pedro', 'Luan'];
const Letra = 'L';

const FiltroDeLentraInicial = Nomes.filter(nomes => nomes.toLocaleLowerCase().startsWith(Letra));

console.log(`Lista de Nomes: ${Nomes}`);
console.log(`Letra para o filtro ${Letra}`);
console.log(`Nomes que comecam com a letra ${Letra}: ${FiltroDeLentraInicial}`);

