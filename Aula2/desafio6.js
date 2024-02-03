// Dado um array nomes, remova todos os nomes que contenham menos de 5 letras.
// const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

const nomesComCincoOuMaisLetras = nomes.filter(nome => nome.length >= 5);

console.log("Nomes com 5 ou mais letras:", nomesComCincoOuMaisLetras);
