import { conversorNumerico } from "./validacao.js"

const button = document.querySelector("#conversor")
button.addEventListener('click', () => {

    const conversor = new conversorNumerico("binOct", 8, "conteudoPai", "octal")

    conversor.validacaoBin()
})
