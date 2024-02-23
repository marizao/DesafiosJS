// Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade. 
// Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
// Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False)

const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Rio de Janeiro"
};

const maiorDeIdade = pessoa.idade >= 18;

const naoEmSaoPaulo = pessoa.cidade !== "São Paulo";

console.log(maiorDeIdade); 
console.log(naoEmSaoPaulo); 
