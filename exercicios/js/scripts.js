function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        let pessoaTemp


        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoaTemp = addPessoa(nome.value,sobrenome.value,peso.value,altura.value);
        pessoas.push(pessoaTemp);

        const texto = resultado.querySelector('.texto');
        texto.innerHTML += `${pessoaTemp.nome} ${pessoaTemp.sobrenome} ${pessoaTemp.peso} ${pessoaTemp.altura} <br><br>`

        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

function addPessoa(nome, sobrenome, peso, altura) {
    const pessoaAdd = {
        nome,
        sobrenome,
        peso,
        altura
    };
    return pessoaAdd;
}

meuEscopo();