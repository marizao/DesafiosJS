// Ache a lógica: 1 1 2 3 5 8 13
// Agora, sua tarefa é criar um programa que recebe um número inteiro N 
// como entrada e retorna os primeiros N termos da sequência.
// Exemplo: Entrada: 6 Saída: [1 , 1, 2, 3, 5, 8] 
// Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, …, 377]

function fibonacci(n) {
    let sequencia = [];
    
    if (n >= 1) {
        sequencia.push(1);
    }
    if (n >= 2) {
        sequencia.push(1);
    }
    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    
    return sequencia;
}

console.log(fibonacci(6));
console.log(fibonacci(14)); 
