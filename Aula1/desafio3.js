// Receba através do prompt dois argumentos: 
// ● navegador
// ● sistemaOperacional
// Deve retornar true se o navegador for "Chrome" ou "Firefox" e o sistema 
// operacional for "Windows" ou "Mac".
// Entrada: navegador: Chrome - sistemaOperacional: Windows => Saída: true
// navegador: Chrome - sistemaOperacional: Mac => Saída: true
// navegador: Firefox - sistemaOperacional: Windows => Saída: true
// navegador: Firefox - sistemaOperacional: Mac => Saída: true
// navegador: Firefox - sistemaOperacional: Sony => Saída: false
// navegador: Safari - sistemaOperacional: Mac => Saída: false

let navegador = "Chrome";
let sistemaOperacional = "Mac";

let condicaoAtendida = (navegador === "Chrome" || navegador === "Firefox") &&
                        (sistemaOperacional === "Windows" || sistemaOperacional === "Mac");

if (condicaoAtendida) {
  console.log("Condição atendida: true");
} else {
  console.log("Condição atendida: false");
}
