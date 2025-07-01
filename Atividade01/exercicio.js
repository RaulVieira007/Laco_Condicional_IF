// Importando readline-sync
const readline = require('readline-sync');

// Recebendo valores.
let A = parseInt(readline.question("Digite o valor de A:  "));
let B = parseInt(readline.question("Digite o valor de B:  "));
let C = parseInt(readline.question("Digite o valor de C:  "));

// Soma.
let soma = (A + B);

// Limpando Terminal.
console.clear();

// Verficando soma.
if (soma > C){
    console.log(`${A} + ${B} = ${soma} \nA Soma de A + B é Maior que C `);
}else if (soma < C) {
    console.log(`${A} + ${B} = ${soma} \nA Soma de A + B é Menor que C `);
}else {
    console.log(`${A} + ${B} = ${soma} \nA Soma de A + B é Igual que C `);
}