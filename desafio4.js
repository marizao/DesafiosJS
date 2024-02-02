// Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro
// vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto
// interno) desses dois vetores usando a fórmula matemática do produto escalar.

let vetor1 = [2, 3, 4];
let vetor2 = [5, 6, 7];


if (vetor1.length !== vetor2.length) {
    console.log("Os vetores devem ter o mesmo comprimento para calcular o produto escalar.");
} else {

    let produtoEscalar = 0;
    for (let i = 0; i < vetor1.length; i++) {
        produtoEscalar += vetor1[i] * vetor2[i];
    }


    console.log("Vetor x:", vetor1);
    console.log("Vetor y:", vetor2);
    console.log("Produto Escalar:", produtoEscalar);
}
