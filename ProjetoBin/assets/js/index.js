import { conversorNumerico } from "./validacao.js"

const button = document.querySelector("#buttonEnviaBin")
const baseBruta = document.querySelector("#baseBruta")
const baseConversora = document.querySelector("#baseConversora")



button.addEventListener('click', () => {
    let index = baseConversora.selectedIndex
    const conversor = new conversorNumerico("valueBin", baseBruta.value, "conteudoPai", baseConversora[`${index}`].dataset.conv, baseConversora.value)

    conversor.validacaoBin()
})
