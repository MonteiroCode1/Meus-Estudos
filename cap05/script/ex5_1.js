const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inNumero.value)
    let resposta = ""
    for (let i = 1; i <= 10; i++) {
        resposta = resposta + valor + "X" + i + "=" + (valor * i) + "\n"
    }
    resp.innerText = resposta
})