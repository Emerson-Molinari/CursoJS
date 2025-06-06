//Com funcao construtora
function criaCalc() {

}

function Calculadora() {
    this.display = document.querySelector('.display');
    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

    this.pressionaEnter = function () {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = function () {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta Invalida!')
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('Conta Invalida!')
            return;
        }
    };

    this.clickBotoes = function () {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('bnt-num')) {
                this.btnParaDisplay(el.innerText);
                this.display.focus();
            }

            if (el.classList.contains('bnt-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('bnt-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('bnt-eq')) {
                this.realizaConta();
            }
        });
    };

    this.inicia = function () {
        this.clickBotoes();
        this.pressionaEnter();
    };

}
const calculadora = new Calculadora();
calculadora.inicia();
