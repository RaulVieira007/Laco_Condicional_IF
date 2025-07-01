// Importando readline-sync
const readline = require('readline-sync');

// Recebendo valores
let nome = readline.question("Digite o nome do doador: ");
let idade = parseInt(readline.question("Digite a idade do doador: "));
let resposta = readline.question("Já fez doações antes? (sim/não): ");
let doacaoAnterior = resposta.toLowerCase() === "sim";

// limpando terminal
console.clear();

// Verificação de aptidão
if (idade >= 18 && idade <= 59) {
    console.log(`${nome} está APTO para doar sangue.`);
} else if (idade >= 60 && idade <= 69 && doacaoAnterior) {
    console.log(`${nome} está APTO para doar sangue.`);
} else {
    console.log(`${nome} NÃO está apto para doar sangue.`);
}

// Sainda Terminal
console.log(A + " + " + B + " = " + soma + "\nA Soma de A + B é Maior que C"   );
console.log(`${A} + ${B} = ${soma} \nA Soma de A + B é Maior que C `);