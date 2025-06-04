const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const fundoEstilos = getComputedStyle(document.body);
const corDeFundo = fundoEstilos.backgroundColor;
console.log(corDeFundo)

for(let p of ps){
    console.log(p)
    p.style.backgroundColor = corDeFundo;
    p.style.color = 'white';
}