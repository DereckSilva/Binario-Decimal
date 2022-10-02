import { conversor } from "./validacao.js"

const valorBin = document.querySelector("#binOct")
const validacao = new conversor(10)


const button = document.querySelector("#conversor")
button.addEventListener('click', () => {
    console.log(validacao.converteNumero(valorBin.value))
})