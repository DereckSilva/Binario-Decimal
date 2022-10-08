export class conversorNumerico
{
    constructor(elementoBinario, base, elementoPai, tipoConversao){
        this.elementoBin = elementoBinario
        this.numBase = base
        this.elementoPai = elementoPai
        this.tipoConversao = tipoConversao
    }

    //validação do número
    validacaoBin(){
        const valorBinario = document.querySelector(`#${this.elementoBin}`)
        let regEx = /2|3|4|5|6|7|8|9/

        if(!Number(valorBinario.value) || valorBinario.value.match(regEx)){
            this.limpa()
            return this.mensagemErro("Por Favor! Insira valores númericos (0 e 1).")
        }else if(valorBinario.value.length > 8){
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
        const valorBin = document.querySelector(`#${this.elementoBin}`)
        const conteudoPai = document.querySelector(`#${this.elementoPai}`)
        const novoElemento = document.createElement('h4')
        novoElemento.setAttribute("id", "binario")

        novoElemento.innerText = `O valor ${valorBin.value} em ${this.tipoConversao} é: ${this.converteNum()}`
    
        return conteudoPai.append(novoElemento)
    }

    //identifica a base e converte o número
    converteNum(){
        const valorBinario = document.querySelector(`#${this.elementoBin}`).value
        switch(this.numBase){
            case 2:
                return parseInt(valorBinario,this.numBase)
            case 8:
                return Number(parseInt(valorBinario, 2)).toString(this.numBase)
             default:
            //mensagem temporária
            return "não existe"
        }
    }

    //remove mensagens anteriores
    removeMensagem(){
        let conteudoPai = document.querySelector(`#${this.elementoPai}`)
        console.log(conteudoPai)
        if(conteudoPai.childNodes.length > 0){
            for(let child of conteudoPai.children){
                child.remove()
            }
        }
    }

    //limpa o input
    limpa(){
        let valorBinario = document.querySelector(`#${this.elementoBin}`)
        return valorBinario.value = ""
    }
}