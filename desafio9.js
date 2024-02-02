// Dado um array notas, calcule a média aritmética das notas, mas ignore a nota
// mais baixa e a nota mais alta do conjunto.
// const notas = [8, 9, 7, 5, 10, 6];

const notas = [8, 9, 7, 5, 10, 6];

const notasOrdenadas = notas.sort((a, b) => a - b);

const notasIntermediarias = notasOrdenadas.slice(1, -1);

const media = notasIntermediarias.reduce((soma, nota) => soma + nota, 0) / notasIntermediarias.length;

console.log("Média das notas (ignorando a mais baixa e a mais alta):", media);
