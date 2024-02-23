// Verificação de Números Pares e Ímpares (If e Ternário)
// ● Escreva um programa que recebe um número como entrada e verifica
// se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
// ímpar.

// If

let numero = 5;

if (numero % 2 === 0) {
    console.log("É par");
} else {
    console.log("É ímpar");
}


// Ternário

let numero1 = 5;

let mensagem = (numero1 % 2 === 0) ? "É par" : "É ímpar";

console.log(mensagem);
