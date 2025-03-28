function indiceIMC() {
    const form = document.querySelector('.form');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    function calculaResultado(evento) {
        evento.preventDefault();

        if (peso.value) {
            if (altura.value) {
                const p = parseFloat(peso.value);
                const a = parseFloat(altura.value);

                const imc = p / (a * a);
                //define o result com o resultado existente
                Resultado(imc);
            } else {
                //mensagem de erro
                //substituir pelo campo de result
                setResultado('Altura invalida',3)
            }
        } else {
            //mensagem de erro
            //substituir pelo campo de result
            setResultado('Peso invalido',3)
        }

    }
    form.addEventListener('submit', calculaResultado);

    function Resultado(imc) {
        if (imc < 18.5) {
            setResultado(`Seu IMC é de ${imc.toFixed(2)} - Abaixo do peso`,2)
        }
        else if (imc >= 18.6 && imc <= 24.9) {
            setResultado(`Seu IMC é de ${imc.toFixed(2)} - Peso normal`,1)
        }
        else if (imc >= 25.0 && imc <= 29.9) {
            setResultado(`Seu IMC é de ${imc.toFixed(2)} - Sobrepeso`,2)
        }
        else if (imc >= 30.0 && imc <= 34.9) {
            setResultado(`Seu IMC é de ${imc.toFixed(2)} - Obesidade grau I`,3)
        }
        else if (imc >= 35.0 && imc <= 39.9) {
            setResultado(`Seu IMC é de ${imc.toFixed(2)} - Obesidade grau II`,3)
        }
        else if (imc > 40.0) {
            setResultado(`Seu IMC é de ${imc.toFixed(2)} - Obesidade grau III`,3)
        }
    }

    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg,background) {
        const resultado = document.querySelector('.resultadoDiv');
        resultado.innerHTML = '';

        const p = criaP();
        if(background == 1){
            p.classList.add('result1');
        }
        if(background == 2){
            p.classList.add('result2');
        }
        if(background == 3){
            p.classList.add('result3');
        }
        resultado.appendChild(p);
        p.innerHTML = msg;
    }

}

indiceIMC();