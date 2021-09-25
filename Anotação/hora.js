const now = new Date(); // Data de hoje
const past = new Date('2021-07-21'); // Outra data no passado
const diff = Math.abs(past.getTime() - now.getTime()); // Subtrai uma data pela outra
console.log(diff)
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
const sec = Math.ceil(diff / (1000 * 60 )); 
// Mostra a diferença em dias
console.log('days ' + days);
