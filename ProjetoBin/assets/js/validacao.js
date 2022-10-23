export class conversorNumerico
{
    constructor(elemento, baseBruta, elementoPai, tipoConversao, baseNumero){
        this.elemento = elemento
        this.baseBruta = baseBruta
        this.elementoPai = elementoPai
        this.tipoConversao = tipoConversao
        this.baseNumero = baseNumero
    }

    //validação do número
    validacaoBin(){
        const valorBinario = document.querySelector(`#${this.elemento}`)
        let regEx = /2|3|4|5|6|7|8|9/

        if(!Number(valorBinario.value) || valorBinario.value.match(regEx) && this.baseBruta == 2){
            this.limpa()
            return this.mensagemErro("Por Favor! Insira valores númericos (0 e 1).")
        }else if(valorBinario.value.length > 8  && this.baseBruta == 2){
            this.limpa()
            return this.mensagemErro("Por Favor! Digite um número abaixo ou igual a 8 caracteres.")
        }else{
            this.mensagemValida()
            return this.limpa()
        }    
    }

    //criação de mensagem em caso de erros
    mensagemErro(mensagem){
        this.removeMensagem()
        const conteudoPai = document.querySelector(`#${this.elementoPai}`)
        const erro = document.createElement("h4")
        erro.setAttribute("style", "color: red")
        erro.innerText = mensagem
        conteudoPai.append(erro)
    }

    //criação de campo para número válido
    mensagemValida(){
        this.removeMensagem()
        const valorBin = document.querySelector(`#${this.elemento}`)
        const conteudoPai = document.querySelector(`#${this.elementoPai}`)
        const novoElemento = document.createElement('h4')
        novoElemento.setAttribute("id", "binario")

        if(this.baseBruta == 2 && this.baseNumero != ''){
            novoElemento.innerText = `O valor ${valorBin.value} em ${this.tipoConversao} é: ${this.converteNumBinario()}`
        }else if(this.baseBruta == 10 && this.baseNumero != ''){
            novoElemento.innerText = `O valor ${valorBin.value} em ${this.tipoConversao} é: ${this.converteNumDecimal()}`
        }else{
            novoElemento.innerText = ''
        }
        return conteudoPai.append(novoElemento)
    }

    //identifica a base e converte o número de binário para outro
    converteNumBinario(){
        const valorBinario = document.querySelector(`#${this.elemento}`).value
        switch(Number(this.baseNumero)){
            case 2:
                return valorBinario
            case 10:
                return parseInt(valorBinario,this.baseBruta)
            case 8:
            case 16:
                return Number(parseInt(valorBinario, 2)).toString(this.baseNumero)
             default:
                return "Base inválida"
        }
    }

    //identifica a base e converte o número decimal para outra base
    converteNumDecimal(){
        const valorBinario = document.querySelector(`#${this.elemento}`).value
        switch(Number(this.baseNumero)){
            case 2:
            case 8:
            case 16:
                return Number(valorBinario).toString(this.baseNumero)
            case 10:
                return valorBinario
            default:
                return "Base inválida"
        }
    }

    //remove mensagens anteriores
    removeMensagem(){
        let conteudoPai = document.querySelector(`#${this.elementoPai}`)
        if(conteudoPai.childNodes.length > 0){
            for(let child of conteudoPai.children){
                child.remove()
            }
        }
    }

    //limpa o input
    limpa(){
        let valorBinario = document.querySelector(`#${this.elemento}`)
        return valorBinario.value = ""
    }
}
