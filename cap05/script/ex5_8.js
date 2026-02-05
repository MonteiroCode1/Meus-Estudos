const prompt = require("prompt-sync")();
const mensagen = "Programa Anos copa do mundo. Digite 0 para sair";
console.log(mensagen);
console.log("-".repeat(mensagen.length));

do {
    const ano = Number(prompt("Ano: "));
    if (ano === 0) {
        break;
    } else if (ano == 1942 || ano == 1946) {
        console.log("Não teve copa no mundo devido a (segunda Guerra mundial)"); 
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log("teve copa do mundo");
    } else {
        console.log("não, não teve copa do Mundo!")
    }
} while (true);