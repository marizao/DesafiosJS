// Crie um programa que peça ao usuário para inserir um número e 
// use um loop while para verificar se o número é primo ou não. Um 
// número primo é aquele que só é divisível por 1 e por ele mesmo. 
// Imprima se o número é primo ou não.

let numero = 3;

let divisores = 0;
let divisor = 2;

while (divisor < numero) {
    if (numero % divisor === 0) {
        divisores++;
        break;
    }
    divisor++;
}

if (divisores === 0 && numero > 1) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}
