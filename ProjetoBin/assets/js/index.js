import { conversorNumerico } from "./validacao.js"

const button = document.querySelector("#buttonEnviaBin")
const baseBruta = document.querySelector("#baseBruta")
const baseConversora = document.querySelector("#baseConversora")
const keyUp = document.querySelector("#valueBin")

function verificaBases(baseBruta, baseConversora){
    if(baseBruta == "" && baseConversora == ""){
        return alert("Nenhuma base foi selecionada.")
    }else if(baseBruta == ""){
        return alert("Escolha a descrição da base inserida.")
    }else{
        return alert("Escolha a descrição para a base convertida.")
    }
}

button.addEventListener('click', () => {
    verificaBases(baseBruta.value, baseConversora.value)
    let index = baseConversora.selectedIndex
    const conversor = new conversorNumerico("valueBin", baseBruta.value, "conteudoPai", baseConversora[`${index}`].dataset.conv, baseConversora.value)

    conversor.validacaoBin()
})

keyUp.addEventListener('keyup', (tecla)=>{
    if(tecla.key == "Enter"){
        if(keyUp.value == ""){
            alert("Digite um valor para ser convertido")
            return false
        }

        verificaBases(baseBruta.value, baseConversora.value)

        let index = baseConversora.selectedIndex
        const conversor = new conversorNumerico("valueBin", baseBruta.value, "conteudoPai", baseConversora[`${index}`].dataset.conv, baseConversora.value)
        conversor.validacaoBin()
    }
})