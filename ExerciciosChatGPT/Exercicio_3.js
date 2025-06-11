// Exercício: Lista de Compras e Orçamento
// Você tem uma lista de compras com itens e seus preços. Faça um programa que:
// Mostre a lista completa de itens com seus preços.
// Calcule o total gasto na compra.
// Verifique se o total está dentro do orçamento definido.
// Mostre uma mensagem:
// Se o total for menor ou igual ao orçamento, mostre:
// "Compra dentro do orçamento! Total: R$X,XX"
// Se ultrapassar o orçamento, mostre:
// "Orçamento estourado! Total: R$X,XX"

// O que você deve fazer
// Criar funções para mostrar a lista, calcular o total e verificar o orçamento.
// Usar forEach ou for para percorrer a lista.
// Usar condicionais para a verificação do orçamento.



const listaDeCompras = [
    { item: 'Arroz', preco: 10.50 },
    { item: 'Feijão', preco: 7.30 },
    { item: 'Macarrão', preco: 4.20 },
    { item: 'Carne', preco: 25.00 },
    { item: 'Leite', preco: 3.40 },
];

const orcamento = 50.00;

function verificarOrcamento(valor) {
    if (orcamento >= valor)
        return console.log(`Compra dentro do orçamento! Total: R$ ${valor.toFixed(2)}`);
    else
        return console.log(`Orçamento estourado! Total: R$ ${valor.toFixed(2)}`);

}

function verificarLista() {
    let valor = 0;
    listaDeCompras.forEach(function (item) {
        console.log(`Item: ${item.item}: R$ ${item.preco.toFixed(2)}`);
        valor += item.preco
    });
    console.log(`Total: R$ ${valor.toFixed(2)}`);
    verificarOrcamento(valor);
}

verificarLista();