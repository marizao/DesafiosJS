// Crie um vetor (array) chamado notas com as notas de um aluno em três
// disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
// da média aritmética.

let notas = [8.5, 9.0, 7.5]; 

let somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let media = somaNotas / notas.length;

console.log("Média:", media);
