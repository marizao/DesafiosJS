// Dado um array idades, encontre o índice do último elemento que sejam maior ou
// igual a 18.
// const idades = [15, 22, 17, 20, 30, 12];

const idades = [15, 22, 17, 20, 30, 12];

const indiceUltimoMaiorOuIgualA18 = idades.reverse().findIndex(idade => idade >= 18);

const indiceCorrigido = idades.length - 1 - indiceUltimoMaiorOuIgualA18;

console.log("Índice do último elemento maior ou igual a 18:", indiceCorrigido);
