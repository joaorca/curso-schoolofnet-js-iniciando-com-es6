let number = 123456.34;
let Us = new Intl.NumberFormat('en-US').format(number);
let De = new Intl.NumberFormat('de-DE').format(number);
let Br = new Intl.NumberFormat('pt-BR').format(number);

console.log(Us);
console.log(De);
console.log(Br);