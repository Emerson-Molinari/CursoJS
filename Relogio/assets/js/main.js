const hora = document.querySelector('.hora');
const date = document.querySelector('.data');
const diaSemana = document.querySelector('.dia');

function zeroLeft(num){
    return num >= 10 ? num : `0${num}`;
}

function getDate() {
    let getDateVar = new Date();

    let horas = getDateVar.getHours();
    let min = getDateVar.getMinutes();
    let dia = getDateVar.getDay() + 1;
    let mes = getDateVar.getMonth() + 1;
    let ano = getDateVar.getFullYear();

    //console.log(`${hora}:${min} ${dia} ${mes} ${ano}`);
    //define a hora
    hora.innerHTML = `${horas}:${zeroLeft(min)}`;

    //define a data
    switch (mes){
        case 1:
            date.innerHTML = `${dia} de Janeiro de ${ano}`;
            break;
        case 2:
            date.innerHTML = `${dia} de Fevereiro de ${ano}`;
            break;
        case 3:
            date.innerHTML = `${dia} de Março de ${ano}`;
            break;
        case 4:
            date.innerHTML = `${dia} de Abril de ${ano}`;
            break;
        case 5:
            date.innerHTML = `${dia} de Maio de ${ano}`;
            break;
        case 6:
            date.innerHTML = `${dia} de Junho de ${ano}`;
            break;
        case 7:
            date.innerHTML = `${dia} de Julho de ${ano}`;
            break;
        case 8:
            date.innerHTML = `${dia} de Agosto de ${ano}`;
            break;
        case 9:
            date.innerHTML = `${dia} de Setembro de ${ano}`;
            break;
        case 10:
            date.innerHTML = `${dia} de Outubro de ${ano}`;
            break;
        case 11:
            date.innerHTML = `${dia} de Novembro de ${ano}`;
            break;
        case 12:
            date.innerHTML = `${dia} de Dezembro de ${ano}`;
            break;
    }

    //define o dia da semana
    switch (dia) {
        case 1:
            diaSemana.innerHTML = 'Domingo';
            break;
        case 2:
            diaSemana.innerHTML = 'Segunda-Feira';
            break;
        case 3:
            diaSemana.innerHTML = 'Terça-Feira';
            break;
        case 4:
            diaSemana.innerHTML = 'Quarta-Feira';
            break;
        case 5:
            diaSemana.innerHTML = 'Quinta-Feira';
            break;
        case 6:
            diaSemana.innerHTML = 'Sexta-Feira';
            break;
        case 7:
            diaSemana.innerHTML = 'Sábado';
            break;
    }
}


getDate();



// caso eu queira reduzir o codigo eu posso usar arrays.
// ou eu posso usar o que o proprio js tem para fazer isso
//let_ou_const.innerHTML = new Date().toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})