// Importando readline-sync
const readline = require('readline-sync');

// Recebendo Valores.
let numero = parseInt(readline.question("Digite o um número:  "));

// Limpando Terminal.
console.clear();

// Variável.
let tipoParidade; // Par ou Ímpar
let tipoSinal;    // Positivo ou Negativo

// Verificação se é par ou ímpar
if (numero % 2 == 0){
    tipoParidade = "par";
}else{
    tipoParidade = "ímpar";
}

if (numero >= 0){
    tipoSinal = "positivo";
}else {
    tipoSinal = "negativo";
}

// Saida Terminal
console.log(`O número ${numero} é ${tipoParidade} e ${tipoSinal}!`);