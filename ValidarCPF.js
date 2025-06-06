// 705.484.450-52 070.987.720-03

//7x 0x 5x 4x 8x 4x 4x 5x 0x
//10 9  8  7  6  5  4  3  2
//70 0  40 28 48 20 16 15 0 = 237

//11 - (237 % 11) = 5 (primeiro digito)
//se o digito for maior que nove considerar como 0

//7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
//11 10 9  8  7  6  5  4  3  2
//77 0  45 32 56 24 20 20 0  10 = 284

//11 - (284 % 11) = 2 (Segundo digito)

//let cpf = '705.484.450-54';
//let cpf = '123.784.369-39';
//let cpfLimpo = cpf.replace(/\D+/g, '');
//let cpfArray = Array.from(cpfLimpo).map(Number);


function ValidaCPF(CpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return CpfEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === undefined) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function (CpfParcial) {
    const cpfArray = Array.from(CpfParcial);

    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);

}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF("123.456.789-01");
console.log(cpf.valida());
//cpf.valida();


/*
function PrimeiroDigito(cpfArray) {
    let total = 0;
    for (let i = 0; i < 9; i++) {
        total += cpfArray[i] * (10 - i);
    };
    let digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
}

function SegundoDigito(cpfArray) {
    let total = 0;
    for (let i = 0; i < 10; i++) {
        total += cpfArray[i] * (11 - i);
    };
    let digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
}

function ValidaCPF(cpfInput) {
    let parcial = cpfArray.slice(0,9);

    let d1 = PrimeiroDigito(parcial);
    parcial.push(d1);
    let d2 = SegundoDigito(parcial);
    parcial.push(d2);

    let cpfGerado = parcial.join();

    return cpfGerado === cpfInput;
}

console.log(ValidaCPF(cpfArray));
*/