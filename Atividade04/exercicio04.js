const readline = require('readline-sync');

// Entrada das três palavras com instruções
console.log("Escolha entre: vertebrado / invertebrado");
let palavra1 = readline.question("Primeira palavra: ").toLowerCase(); // .toLowerCase() Converte tudo para letra minúscula.
 
console.log("Escolha entre:");
if (palavra1 === "vertebrado") {
    console.log("- ave");
    console.log("- mamifero");
} else if (palavra1 === "invertebrado") {
    console.log("- inseto");
    console.log("- anelideo");
}
let palavra2 = readline.question("Segunda palavra: ").toLowerCase(); // .toLowerCase() Converte tudo para letra minúscula.
 
console.log("Escolha entre:");
if (palavra2 === "ave") {
    console.log("- carnivoro");
    console.log("- onivoro");
} else if (palavra2 === "mamifero") {
    console.log("- onivoro");
    console.log("- herbivoro");
} else if (palavra2 === "inseto") {
    console.log("- hematofago");
    console.log("- herbivoro");
} else if (palavra2 === "anelideo") {
    console.log("- hematofago");
    console.log("- onivoro");
}
let palavra3 = readline.question("Terceira palavra: ").toLowerCase(); // .toLowerCase() Converte tudo para letra minúscula.
 

// Lógica de identificação
if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            console.log("Águia");
        } else if (palavra3 === "onivoro") {
            console.log("Pomba");
        }
    } else if (palavra2 === "mamifero") {
        if (palavra3 === "onivoro") {
            console.log("Homem");
        } else if (palavra3 === "herbivoro") {
            console.log("Vaca");
        }
    }
} else if (palavra1 === "invertebrado") {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            console.log("Pulga");
        } else if (palavra3 === "herbivoro") {
            console.log("Lagarta");
        }
    } else if (palavra2 === "anelideo") {
        if (palavra3 === "hematofago") {
            console.log("Sanguessuga");
        } else if (palavra3 === "onivoro") {
            console.log("Minhoca");
        }
    }
} else {
    console.log("Animal não identificado.");
}
