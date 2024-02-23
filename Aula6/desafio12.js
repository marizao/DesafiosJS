// 12 - Fazer um simulador de rolagem de dados, que receba como input N 
// dados e N lados e quantidade de tentativas e mostre as rolagens 
// individuais e a soma dos valores?
// Entradas:
// Quantidade de dados: 3
// Quantidade de lados: 9
// Quantidade de tentativas: 3

function rolarDados(quantidadeDados, quantidadeLados, quantidadeTentativas) {
    for (let t = 1; t <= quantidadeTentativas; t++) {
        let resultados = [];
        let soma = 0;

        for (let i = 0; i < quantidadeDados; i++) {
            let resultado = Math.floor(Math.random() * quantidadeLados) + 1;
            resultados.push(resultado);
            soma += resultado;
        }

        console.log(`Tentativa ${t}: Resultados: ${resultados.join(', ')}, Soma: ${soma}`);
    }
}

let quantidadeDados = 3;
let quantidadeLados = 9;
let quantidadeTentativas = 3;

if (!isNaN(quantidadeDados) && quantidadeDados > 0 && !isNaN(quantidadeLados) && quantidadeLados > 0 && !isNaN(quantidadeTentativas) && quantidadeTentativas > 0) {
    rolarDados(quantidadeDados, quantidadeLados, quantidadeTentativas);
} else {
    console.log("Por favor, insira números válidos para a quantidade de dados, a quantidade de lados e a quantidade de tentativas.");
}
