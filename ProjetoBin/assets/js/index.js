import { conversorNumerico } from "./validacao.js"

const button = document.querySelector("#buttonEnviaBin")
const baseBruta = document.querySelector("#baseBruta")
const baseConversora = document.querySelector("#baseConversora")
let descricao = document.querySelectorAll(".tipoConvert")

let descricaoConvert = []

descricao.forEach((element)=>{
    element.addEventListener('click', ()=>{
        descricaoConvert.pop()
        return descricaoConvert.push(element.dataset.conv)
    })
})

button.addEventListener('click', () => {

    const conversor = new conversorNumerico("valueBin", baseBruta.value, "conteudoPai", descricaoConvert[0], baseConversora.value)

    conversor.validacaoBin()
})
