
// declarar uma classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} esta falando!`);
    }
}

const p1 = new Pessoa('teste', 'sobreTeste');

//console.log(p1);


//getters e setters

const _velocidade = Symbol();

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') return;
        if (valor < 100 || valor < 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER')
        return this[_velocidade];
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

//const c1 = new Carro('Fusca');

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

//console.log(c1.velocidade);

//heranca
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} ja ligado.`)
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} ja desligado.`)
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const t1 = new Smartphone('Iphone', 'roxo', '14 pro');

//console.log(t1)


//metodos instancia

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    
    aumentarVolume() {
        this.volume += 2;
    }
    
    diminuirVolume() {
        this.volume -= 2;
    }
    //metodos instancia

    static trocarPilha(){
        console.log('pilhas trocadas');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
ControleRemoto.trocarPilha();
console.log(controle1);