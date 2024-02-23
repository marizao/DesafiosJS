// - Conversão de Notas em Conceitos
// ● Faça um programa que peça ao usuário para digitar uma letra e
// verifique se é uma vogal ou uma consoante utilizando o comando
// switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o
// programa deve exibir a mensagem "É uma vogal". Se o usuário
// digitar uma consoante, o programa deve exibir a mensagem "É uma
// consoante".

let letra = "g".toLowerCase();

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É uma vogal");
        break;
    default:
        if ((letra >= 'a' && letra <= 'z') && !('aeiou'.includes(letra))) {
            console.log("É uma consoante");
        } else {
            console.log("Caractere inválido");
        }
}
