//heranca

//pruduto -> aumento, desconto
//camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome,
        this.preco = preco
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome,preco,material){
    Produto.call(this,nome,preco);
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('gen',111);
const camiseta = new Camiseta('regata',7.5);
const caneca = new Caneca('De Cafe',11.1);
console.log(produto);
console.log(camiseta);
console.log(caneca);