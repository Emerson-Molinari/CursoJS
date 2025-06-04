//escreva uma funcao que retorne o maior numero entre dois

function RandomNumber(min, max) {
    let number = Math.random() * (max - min) + min;
    return Math.floor(number);
}

const min = 1;
const max = 500;

const numbers = [RandomNumber(min, max),RandomNumber(min, max)];
console.log(numbers);
console.log(Math.max(...numbers))