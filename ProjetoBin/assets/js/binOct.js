import { obtemValor } from "./validacao.js"

const valorBin = document.querySelector("#binOct")
const validacao = new obtemValor(10)


const button = document.querySelector("#conversor")
button.addEventListener('click', () => {
    console.log(validacao.validaCampo(valorBin.value))
})