// Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz
// 2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a
// determinante dessa matriz usando a fórmula matemática de determinante.

let matriz = [
    [3, 5],
    [2, 4]
];

let determinante = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];

console.log("Matriz:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

console.log("Determinante:", determinante);