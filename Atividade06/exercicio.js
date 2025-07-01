// Importando readline-sync
const readline = require('readline-sync');

// Recebendo valores.
const nome = readline.question("Digite o nome do colaborador:  ");

// Exibindo Cargos
console.log("1 - Gerente\n 2 - Vendedor\n 3 - Supervisor\n 4 - Motorista\n 5 - Estoquista\n 6 - Técnico de TI");
const codigoCargo = readline.questionInt("Digite o código do cargo (1 a 6): ");

// Limpando Terminal.
console.clear();

// Variavel Salario
let Salario = readline.questionInt("Digite O salário atual:  ");

// Limpando Terminal.
console.clear();

// Reajuste
let reajuste = 0;

// bla bla bla
switch(codigoCargo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10;
        break
    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break
    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        break
    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        break
    case 5:
        cargo = "Gerente";
        reajuste = 0.05;
        break
    case 6:
        cargo = "Gerente";
        reajuste = 0.08;
        break                    
}

// Calculo 
const novoSalario = Salario + (Salario * reajuste);

// Saida Terminal
console.log(`Nome do colaborador ${nome}`);
console.log(`Cargo ${cargo}`);
console.log(`Salário R$: ${novoSalario.toFixed(2)}`);