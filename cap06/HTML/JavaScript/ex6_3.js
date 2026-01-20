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