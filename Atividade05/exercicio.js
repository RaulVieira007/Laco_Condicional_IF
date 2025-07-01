// Importando readline-sync
const readline = require('readline-sync');

// Informando Cardapio
console.log("1- Cachorro Quente R$:10.00\n 2- X-Salada R$:15.00\n 3- X-Bacon R$:18.00\n 4- Bauru R$:12.00\n 5- Regrigerante R$:8.00\n Suco de laranja R$:13.00");

// Recebendo valores
let codigo = readline.questionInt("Digite o Código do item (1 a 6):  ");
let quantidade = readline.questionInt("Digite a quantidade:  ");

// Limpando Terminal
console.clear();

// Variavel
let produto = "";
let preco = 0;

// Verificação com base no código
switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
     case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
     case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
     case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
     case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;
    default:
        console.log("Código inválido!");      
        process.exit(); // Encerramento do programa
} 

// Cáculo do total da compra
let total = preco * quantidade;

// Saida terminal
console.log(`Produto ${produto}`);
console.log(`Total a pagar: R$ ${total.toFixed(2)}`);