const prompt = require("prompt-sync")();

// sistema de saques de um banco

const saque_valido = [];
const saque_invalido = [];

do {
    const saque = Number(prompt("saque: "));
    // verificaçao, para uso do break
    if (saque == 0) {
        break
    }
    //verificaçao, se é um valor valido
    if (saque % 10 == 0) {
        console.log("Saque Valido!...");
        saque_valido.push(saque);
    } else {
        console.log("Saque Invalido!...");
        saque_invalido.push(saque);
    }

} while (true)

console.log(`\nSaques Validos\n${"-".repeat(40)}\n`);
for (const element of saque_valido) {
    console.log(element);
}
soma = saque_valido.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(`Total dos Saques: R$ ${soma}\n`);

console.log(`Numero de Tentativas de saques (Saques Invalidos): ${saque_invalido.length}`);