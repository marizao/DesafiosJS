// Jogo de Adivinhação com Limite
// ● Modifique o jogo de adivinhação do Desafio 4 para limitar o 
// número de tentativas. Se o usuário não adivinhar o número dentro 
// de um determinado número de tentativas (por exemplo, 5 
// tentativas), o programa deve encerrar e informar o número 
// correto

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

console.log("Adivinhe o número entre 1 e 100.");
console.log("Você tem 5 tentativas.");

let tentativas = 0;
let numeroUsuario;

while (tentativas < 5) {
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

if (tentativas === 5 && numeroUsuario !== numeroAleatorio) {
    console.log("Suas 5 tentativas acabaram. O número correto era: " + numeroAleatorio);
}
