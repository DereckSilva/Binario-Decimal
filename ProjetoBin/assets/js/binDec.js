import { conversor } from "./validacao.js"

function criaMensagemErro(mensagem){
    removeMensagem() 

    let conteudoPai = document.querySelector("#conteudoFilho")
    
    let mensagemErro = document.createElement('p')
    mensagemErro.setAttribute("style", "color:red")
    mensagemErro.setAttribute("id", "erro")
    mensagemErro.innerText = mensagem
    return conteudoPai.append(mensagemErro)
}

function criaElementoDec(valorDec){
    removeMensagem()

    let valorBinario = document.querySelector("#valueBin").value

    let conteudoPai = document.querySelector("#conteudoFilho")
    let valorBin = document.createElement('h4')
    valorBin.setAttribute("id", "binario")
    valorBin.innerText  = `O valor ${valorBinario} em decimal é: ${valorDec}`
    conteudoPai.append(valorBin)
}

function removeMensagem(){
    let conteudoPai = document.querySelector("#conteudoFilho")
    console.log(conteudoPai)
    if(conteudoPai.childNodes.length > 0){
        for(let child of conteudoPai.children){
            child.remove()
        }
    }
}

let validaBin = document.querySelector("#buttonEnviaBin")
validaBin.addEventListener('click', function(){
    let valorBinario = document.querySelector("#valueBin").value
    let regEx = /2|3|4|5|6|7|8|9/

    if(!Number(valorBinario)){
        limpa()
        criaMensagemErro("Por Favor! Insira valores númericos (0 e 1).")
    }else if(valorBinario.length > 8){
        limpa()
        criaMensagemErro("Por Favor! Digite um número abaixo ou igual a 8 carcteres.")
    }else if(valorBinario.match(regEx)){
        limpa()
        criaMensagemErro('Por Favor! Digite apenas os valores 0 e 1.')
    }else{
        limpa()
        const validacao = new conversor(valorBinario)
        let valor = validacao.converteNumero(2)
        criaElementoDec(valor)
    }
})

function limpa(){
    let valorBinario = document.querySelector("#valueBin")
    return valorBinario.value = ""
}