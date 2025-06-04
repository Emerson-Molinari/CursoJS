const elementos = [
    { tag: 'p', texto: 'Frase 1', classe: 'a' },
    { tag: 'div', texto: 'frase 2', classe: 'b' },
    { tag: 'footer', texto: 'frase 3', classe: 'c' },
    { tag: 'section', texto: 'frase 4', classe: 'd' },
];

const bodySection = document.querySelector('.container');

function AddElements() {
    console.log(elementos)


    function createElement(elementType, className) {
        const newElemente = document.createElement(elementType);
        newElemente.classList.add(className);
        bodySection.appendChild(newElemente);
        return newElemente;
    }

    function addTextinElement(elementToAdd,texto) {
        elementToAdd.innerHTML = texto;
    }

    for(let i = 0; i <= elementos.length -1;i++){
        let {tag, texto, classe} = elementos[i]
        let newElemente = createElement(tag,classe);
        addTextinElement(newElemente,texto);
        console.log(i)
    }
}

AddElements();