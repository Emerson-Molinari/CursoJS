//funcoes 

//Declaracao de funcao (function hoisting) 
function olaMundo(){
    console.log('ola mundo');
}
olaMundo();

//First-class object (objeto de primeira classe)
//Function Expression

const souUmDado = function(){
    console.log("Sou um Dado");
}
souUmDado();

//arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function');
}
funcaoArrow();

//dentro de um objeto
const obj = {
    fala(){
        console.log('estou falando...');
    }
};
obj.fala();