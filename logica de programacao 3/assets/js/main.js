//escreva uma funcao que recebe um numero e retorne o seguinte
//se for divisivel por 3 retorne = fizz
//se for divisivel por 5 retorne = buzz
//se for divisivel por 3 e 5 retorne = fizzbuzz
//se nao for divisivel por 3 e 5 renorne o numero
//checar se o numero é realmente um numero
//use a funcao com numeors de 0 a 100

function FizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return ' FizzBuzz';
    if (numero % 3 === 0) return ' Fizz';
    if (numero % 5 === 0) return ' Buzz';
    return numero;
}

for(let i = 0; i < 100;i++){
    console.log(i + FizzBuzz(i))
}