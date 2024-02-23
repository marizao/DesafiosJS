// Determinação do Maior Número
// ● Escreva um programa que receba três números como entrada e
// determina o maior deles. Imprima o número mais alto.

let numero1 = 9;
let numero2 = 8;
let numero3 = 7;

let maiorNumero = (numero1 >= numero2 && numero1 >= numero3) ? numero1 : (numero2 >= numero1 && numero2 >= numero3) ? numero2 : numero3;

console.log("O maior número é: " + maiorNumero);
