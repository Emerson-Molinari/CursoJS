class ValidaForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.eventos();
    }

    eventos() {
        this.form.addEventListener('submit', e => {
            this.handleSumit(e);
        });
    }

    handleSumit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidos = this.senhasSaoValidos();

        if (camposValidos && senhasValidos) {
            alert('Formulario Enviado');
            this.form.submit();
        }
    }

    senhasSaoValidos() {
        let valid = true;

        const senha = this.form.querySelector('.senha');
        const ConfirmarSenha = this.form.querySelector('.conf-senha');

        if (senha.value !== ConfirmarSenha.value) {
            valid = false;
            this.criaErro(senha, `● Campos Senha e Confirmar Senha dever Estar iguais.`);
            this.criaErro(ConfirmarSenha, `● Campos Senha e Confirmar Senha dever Estar iguais.`);
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, `● Senha precisa ter entre 6 a 12 caracteres.`);
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `● Campo "${label}" nao pode estar em branco`);
                valid = false;
                console.log('3')
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }

        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true;
        if (usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, '● Usuario precisa ter entre 3 e 12 caracteres');
            valid = false;
            console.log('6')
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, '● Nome de Usuario precisa Conter apenas letras e/ou numeros.');
            valid = false;
            console.log('7')
        }
    }

    validaCPF(campo) {
        const cpf = new ValidarCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, ' ● Cpf Invalido')
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaForm();