// Importando readline-sync
const readline = require('readline-sync');

// Recebendo valores.
let numero1 = readline.questionInt("Digite o primeiro valor.");
let numero2 = readline.questionInt("Digite o Segundo valor.");

// Monstrando opções.
console.log("1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão");

// Variavel operação
const operacao = readline.questionInt("Digite o Código da operação:");

// Variavel Resultado
let resultado;

// variavel Simbolo
let simbolo;

 // Calculos 1
 switch(operacao) {
    case 1:
        resultado = numero1 + numero2;
        simbolo = "+";
        break;
    case 2:
        resultado = numero1 - numero2;
        simbolo = "-";
        break;
    case 3:
        resultado = numero1 * numero2;
        simbolo = "*";
        break;
    case 4:
        if(numero2 === 0){
            console.log("Erro de Divisão pois zero não e permetido!");
            process.exit();
        }
        resultado = numero1 / numero2;
        simbolo = "/";
        break;
    default:
        console.log("Operação Inválida!");
        process.exit();
}

// Saida Terminal
console.log(`${numero1.toFixed(1)} ${simbolo} ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);