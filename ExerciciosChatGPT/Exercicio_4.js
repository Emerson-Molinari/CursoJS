// Desafio: Controle de Estoque Simples
// Você vai criar um sistema simples para controlar o estoque de uma loja. A loja tem uma lista de produtos, cada um com:
// nome
// preco
// quantidadeEmEstoque
// Requisitos:
// Mostrar todos os produtos com nome, preço e quantidade. ok
// Mostrar o valor total em estoque de todos os produtos (preço × quantidade). ok
// Listar os produtos que estão com o estoque zerado. ok
// Permitir a venda de um produto (descontar 1 unidade de um produto específico). ok
// Atualizar o estoque após a venda. ok

const produtos = [
    { nome: 'Celular', preco: 1200, quantidadeEmEstoque: 3, estoqueMinimo: 2 },
    { nome: 'Notebook', preco: 3500, quantidadeEmEstoque: 0, estoqueMinimo: 1 },
    { nome: 'Fone de Ouvido', preco: 200, quantidadeEmEstoque: 5, estoqueMinimo: 3 },
    { nome: 'Carregador', preco: 80, quantidadeEmEstoque: 2, estoqueMinimo: 2 }
];

function verificarEstoque() {
    //lista os produtos do estoque
    console.log('Produtos do Estoque:');
    produtos.forEach(function (item) {
        console.log(`  *Produto: ${item.nome} - Valor ${item.preco.toFixed(2)} - Estoque ${item.quantidadeEmEstoque}`);
    });
}

function relatorioGeral() {
    verificarEstoque();
    VerificarValorEstoque();
    verificaZerados();
    verificarUmEstoque();
    verificarEstoqueMin();
}

function VerificarValorEstoque() {
    //verifica o valor do estoque
    let totalValor = produtos.reduce(function (ac, item) {
        if (item.quantidadeEmEstoque > 0) {
            ac += item.preco * item.quantidadeEmEstoque;
        }
        return ac;
    }, 0)
    //verifica a quantidade total do estoque
    const totalProdutos = produtos.reduce(function (ac, item) {
        ac += item.quantidadeEmEstoque;
        return ac;
    }, 0)
    console.log(`  *Valor do Estoque: R$ ${totalValor.toFixed(2)} - Total de Produtos ${totalProdutos}`);
    console.log();
}

function verificaZerados() {
    //verificar e listar os que estao com 0 de estoque
    console.log('Produtos em Falta:');
    produtos.forEach(function (item) {
        if (item.quantidadeEmEstoque <= 0)
            console.log(`  *${item.nome} Esta com falta de Estoque`);
    });
    console.log();
}

function verificarUmEstoque() {
    // verifica quando o produto tem 1 em estoque
    console.log('Produtos com Somente uma peca em Estoque:');
    produtos.forEach(function (item) {
        if (item.quantidadeEmEstoque === 1) {
            console.log(`  *Produto ${item.nome} Esta somente com uma peca em Estoque!`)
        }
    });
    console.log();
}

function verificarEstoqueMin() {
    console.log('Produtos abaixo do estoque min');
    produtos.forEach(function (item) {
        if (item.quantidadeEmEstoque < item.estoqueMinimo) {
            console.log(`  *Produto ${item.nome} esta com ${item.estoqueMinimo - item.quantidadeEmEstoque} abaixo do estoque minimo! ${item.quantidadeEmEstoque}/${item.estoqueMinimo}`)
        }
    });

    console.log();
}

//verifica se o produto existe
function VerificarProduto(nome) {
    return produtos.some(obj => obj.nome.toLocaleLowerCase() === nome.toLocaleLowerCase());
}

function VenderProduto(nome, quantia) {
    const nomeProduto = nome.toLowerCase();
    const compra = produtos.find(function (obj) {
        if (obj.nome.toLocaleLowerCase() === nomeProduto) {
            if (obj.quantidadeEmEstoque > 0 && quantia <= obj.quantidadeEmEstoque) {
                obj.quantidadeEmEstoque -= quantia;
                console.log(`  *Produto ${obj.nome} Vendido com Sucesso por ${obj.preco.toFixed(2)} - Quantidade ${quantia} valor R$ ${(quantia * obj.preco).toFixed(2)}`);
                console.log();
                verificarEstoque();
                verificarUmEstoque();
                verificaZerados();
            } else {
                console.log(`  *Produto ${obj.nome} nao tem a quantidade suficiente em estoque!`)
            }
        }
    });
}

function compraProduto(nome = '', quantia = 0) {
    produtos.forEach(function (obj) {
        if (obj.nome.toLocaleLowerCase() === nome.toLocaleLowerCase()) {
            obj.quantidadeEmEstoque += quantia;
            verificarEstoque();
            VerificarValorEstoque();
            return;
        }
    })
}
