const falar = {
    falar() {
        console.log(`${this.nome} Esta Falando`);
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} Esta Comendo`);
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} Esta Bebendo`);
    },
}

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
};

const p1 = criaPessoa('luiz', 'otavio')
const p2 = criaPessoa('Maria', 'A.')

console.log(p1);
console.log(p2);
