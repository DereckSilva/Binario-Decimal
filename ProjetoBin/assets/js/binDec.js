import { conversorNumerico } from "./validacao.js"

const button = document.querySelector("#buttonEnviaBin")
button.addEventListener('click', () => {

    const conversor = new conversorNumerico("valueBin", 2, "conteudoPai", "decimal")

    conversor.validacaoBin()
})
