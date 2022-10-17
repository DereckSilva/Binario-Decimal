import { conversorNumerico } from "./validacao.js"

const converter = document.querySelector("#converteBinario")

converter.addEventListener('click', ()=>{

    const conversor = new conversorNumerico("binHex",16,'conteudoPai','hexadecimal')

    conversor.validacaoBin()
})