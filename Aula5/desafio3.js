// - Soma de Números Pares
// ● Desenvolva um programa que peça ao usuário para inserir números 
// inteiros. Use um loop while para calcular a soma dos números 
// pares inseridos pelo usuário. Pare a entrada quando o usuário 
// inserir 0 e exiba a soma total.

let numero;
let soma = 0;

console.log("Insira números inteiros. Insira 0 para parar.");

while (true) {
    numero = parseInt(prompt("Insira um número inteiro:"));
    
    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        soma += numero;
    }
}

console.log("A soma dos números pares inseridos é: " + soma);
