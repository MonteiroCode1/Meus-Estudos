const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const vetor = [];

const acumulador = ``;

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    acumulador += `Nome: ${nome}, Idade: ${idade}\n`;
    vetor.push([nome, idade]);
});


frm.inLista.addEventListener("click", () => {
    resp.innerText = acumulador;
});