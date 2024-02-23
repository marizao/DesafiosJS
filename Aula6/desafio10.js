// 10 - Fazer um simulador de rolagem de dados, que receba como input N 
// dados de 6 lados e mostre as rolagens individuais e a soma dos 
// valores
// Entradas:
// Quantidade de dados: 2

function simularRolagemDados(quantidadeDados) {
    let resultadosIndividuais = [];
    let soma = 0;

    for (let i = 0; i < quantidadeDados; i++) {
        let resultado = Math.floor(Math.random() * 6) + 1; 
        resultadosIndividuais.push(resultado); 
        soma += resultado; 
    }

    console.log("Resultados individuais das rolagens: " + resultadosIndividuais.join(", "));
    console.log("Soma dos valores: " + soma);
}

let quantidadeDados = 2;

if (!isNaN(quantidadeDados) && quantidadeDados > 0) {
    simularRolagemDados(quantidadeDados);
} else {
    console.log("Por favor, insira um número válido de dados.");
}
