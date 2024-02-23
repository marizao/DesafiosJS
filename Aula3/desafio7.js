// Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores 
// são seus preços. 
// Verifique se a maçã é mais cara que a banana
// Verifique se a pêra não custa o mesmo que a uva

const frutas = new Map();

frutas.set('maçã', 2.50);
frutas.set('banana', .80);
frutas.set('pêra', 2.20);
frutas.set('uva', 3.00);

const precoMaca = frutas.get('maçã');
const precoBanana = frutas.get('banana');
const macaMaisCaraQueBanana = precoMaca > precoBanana;

const precoPera = frutas.get('pêra');
const precoUva = frutas.get('uva');
const peraNaoCustaIgualAUva = precoPera !== precoUva;

console.log("A maçã é mais cara que a banana?", macaMaisCaraQueBanana); 
console.log("A pêra não custa o mesmo que a uva?", peraNaoCustaIgualAUva); 
