// Fazer um simulador de rolagem de dados, que receba como input N 
// dados e N lados e mostre as rolagens individuais e a soma dos 
// valores?
// Entradas:
// Quantidade de dados: 2
// Quantidade de lados: 9

function rolarDados(quantidadeDados) {
    let resultados = [];
    let soma = 0;

    for (let i = 0; i < quantidadeDados; i++) {
        let resultado = Math.floor(Math.random() * 9) + 1;
        resultados.push(resultado);
        soma += resultado;
    }

    console.log("Resultados individuais das rolagens: " + resultados.join(", "));
    console.log("Soma dos valores: " + soma);
}

let quantidadeDados = 2;

if (!isNaN(quantidadeDados) && quantidadeDados > 0) {
    rolarDados(quantidadeDados);
} else {
    console.log("Por favor, insira um número válido de dados.");
}

