const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const carros = [];

frm.addEventListener("submit", (e) => { 
    e.preventDefault() // evita o envio do form
    const nome = frm.inModelo.value;
    const preço = Number(frm.inPreço.value);
    carros.push({nome, preço});
    frm.inModelo.value = "";
    frm.inPreço.value = "";
    inModelo.focus();
    // dispara um evento de click em inListarTodos
    frm.inListarTodos.dispatchEvent(new Event("click"));
})

frm.inListar.addEventListener("click", () => {
    if (carros.length == 0) {
        console.log("Não há veiculos");
        return
    }
    listar = carros.reduce((acumulador, aux) => 
    acumulador + aux.nome + ` -R$: ` + aux.preço.toFixed(2) + `\n`, ``);
    resp.innerText = `Lista dos carros Cadastrados\n${"-".repeat(40)}\n${listar}`
})

frm.inFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor Maximo que o Cliente deseja Pagar? "));
    const filtrar = carros.filter(aux => aux.preço <= maximo);
    const listar = filtrar.reduce((acumulador, valor) => acumulador + valor.nome + " -R$ " + valor.preço.toFixed(2) + "\n", "");
    resp.innerText = `Valores filtador apartir de ${maximo}\n${"-".repeat(40)}\n${listar}`;
})