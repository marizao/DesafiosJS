// Crie um mapa para representar uma lista de compras
// const listaDeCompras = new Map()
// 1. Adicione itens à lista de compras com a quantidade desejada
// Maçã - 5
// Banana - 3
// Leite - 4
// Pão - 10
// 2. Verifique se um item específico está na lista de compras
// 3. Verifique a quantidade de um item específico da lista
// 4. Modifique a quantidade de um item específico da lista
// 5. Remova um item específico da lista

const listaDeCompras = new Map();

listaDeCompras.set('Maçã', 5);
listaDeCompras.set('Banana', 3);
listaDeCompras.set('Leite', 4);
listaDeCompras.set('Pão', 10);

const item = 'Maçã';
if (listaDeCompras.has(item)) {
    console.log(`${item} está na lista de compras.`);
} else {
    console.log(`${item} não está na lista de compras.`);
}

const itemQuantidade = 'Pão';
if (listaDeCompras.has(itemQuantidade)) {
    console.log(`Quantidade de ${itemQuantidade}: ${listaDeCompras.get(itemQuantidade)}`);
} else {
    console.log(`${itemQuantidade} não está na lista de compras.`);
}

const itemModificar = 'Leite';
const novaQuantidade = 6;
if (listaDeCompras.has(itemModificar)) {
    listaDeCompras.set(itemModificar, novaQuantidade);
    console.log(`Quantidade de ${itemModificar} modificada para ${novaQuantidade}.`);
} else {
    console.log(`${itemModificar} não está na lista de compras.`);
}

const itemRemover = 'Banana';
if (listaDeCompras.has(itemRemover)) {
    listaDeCompras.delete(itemRemover);
    console.log(`${itemRemover} foi removido da lista de compras.`);
} else {
    console.log(`${itemRemover} não está na lista de compras.`);
}

console.log("Lista de Compras Atualizada:");
listaDeCompras.forEach((quantidade, item) => {
    console.log(`${item} - ${quantidade}`);
});
