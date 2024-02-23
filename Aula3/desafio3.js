// Criar um dicionário de sinônimos usando Array e Objs
// Exemplo: dicionarioDeSinonimos.feliz, deve retornar ["alegre", "contente", 
// "satisfeito"]
// dicionarioDeSinonimos.triste, retorna ["melancólico", "abatido", "deprimido"],
// dicionarioDeSinonimos.bom, retorna ["ótimo", "excelente", "maravilhoso"],

const dicionarioDeSinonimos = {
    feliz: ["alegre", "contente", "satisfeito"],
    triste: ["melancólico", "abatido", "deprimido"],
    bom: ["ótimo", "excelente", "maravilhoso"]
};

function buscarSinonimos(palavra) {
    if (dicionarioDeSinonimos[palavra]) {
        return dicionarioDeSinonimos[palavra];
    } else {
        return ["Nenhum sinônimo encontrado"];
    }
}

console.log("Sinônimos de 'feliz':", buscarSinonimos("feliz"));
console.log("Sinônimos de 'triste':", buscarSinonimos("triste"));
console.log("Sinônimos de 'bom':", buscarSinonimos("bom"));
console.log("Sinônimos de 'alegre':", buscarSinonimos("alegre"));
