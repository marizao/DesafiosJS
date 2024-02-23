// Crie um objeto representando uma pessoa com nome, idade e cidade.
// Utilize um loop for-in para imprimir no console todas as 
// propriedades e os valores do objeto

let pessoa = {
    nome: "Maria",
    idade: 22,
    cidade: "Rio de Janeiro"
};

for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}
