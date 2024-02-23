// Crie um programa que pede ao usuário para inserir uma palavra e 
// conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for
// e estruturas condicionais if para realizar a contagem. 
// (Não precisa considerar acentos. Ex.: aviao)

function contarVogais() {
    let palavra = "SantanderCoders";
    let quantidadeVogais = 0;

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i].toLowerCase();
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            quantidadeVogais++;
        }
    }

    console.log(`A palavra '${palavra}' contém ${quantidadeVogais} vogais.`);
}

contarVogais();