'use strict';

var number = 123456.34;
var Us = new Intl.NumberFormat('en-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);
var Br = new Intl.NumberFormat('pt-BR').format(number);

console.log(Us);
console.log(De);
console.log(Br);
