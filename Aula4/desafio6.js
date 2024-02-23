// Verificação de Idade que é permitido dirigir (If e Ternário)
// ● Crie um programa que verifica a idade de uma pessoa e determina
// se ela pode dirigir ou não. Se a pessoa tiver 18 anos ou mais,
// ela pode dirigir; caso contrário, não pode.

//If

let idade = 16;

if (idade >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}


//Ternário

let idade1 = 60;

let mensagem = (idade1 >= 18) ? "Você pode dirigir." : "Você não pode dirigir.";

console.log(mensagem);
