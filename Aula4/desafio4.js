// Verificação de Triângulo
// ● Crie um programa que recebe três comprimentos de lados de um
// triângulo como entrada e determina se eles formam um triângulo
// equilátero (Todos os lados são iguais), isósceles (Dois lados
// são iguais) ou escaleno (Se nada é igual). Imprima a
// classificação do triângulo.

// Solicita ao usuário que insira os comprimentos dos lados do triângulo
let lado1 = 5;
let lado2 = 5;
let lado3 = 6;

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("É um triângulo equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("É um triângulo isósceles.");
    } else {
        console.log("É um triângulo escaleno.");
    }
} else {
    console.log("Os comprimentos dos lados não formam um triângulo.");
}
