var US = new Intl.DateTimeFormat("en-US");
var BR = new Intl.DateTimeFormat("pt-BR");
var DE = new Intl.DateTimeFormat("de-DE");

//JavaScript counts months from 0 to 11. January is 0. December is 11.
let data = new Date(1983, 5, 24); //24-jun-1983
console.log(US.format(data));
console.log(BR.format(data));
console.log(DE.format(data));