// Adivinhe o Número
// ● Crie um programa que gere um número aleatório entre 1 e 100. Em 
// seguida, peça ao usuário para adivinhar o número. Use um loop 
// while para continuar pedindo ao usuário que adivinhe até que ele 
// acerte o número. Forneça dicas informando se o número é maior ou 
// menor.

// Gera um número aleatório entre 1 e 100

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

console.log("Adivinhe o número entre 1 e 100.");

let tentativas = 0;
let numeroUsuario;

while (true) {
    numeroUsuario = parseInt(prompt("Tente adivinhar o número:"));
    tentativas++;

    if (numeroUsuario === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número " + numeroAleatorio + " em " + tentativas + " tentativas.");
        break;
    } else if (numeroUsuario < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }
}
