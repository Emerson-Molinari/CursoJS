const numero = Number(prompt('digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ` a rais quadrada dele é ${numero ** (1/2)} <br>
${numero} é inteiro = ${Number.isInteger(numero)}<br>
é NaN = ${Number.isNaN(numero)} <br>
arredondado para baixo é ${Math.floor(numero)} <br>
arredondado para cima é ${Math.ceil(numero)} <br>
com duas casas decimais é ${numero.toFixed(2)}`;
