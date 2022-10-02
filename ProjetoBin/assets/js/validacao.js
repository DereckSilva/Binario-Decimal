function obtemValor(numero){
    this.numero = numero
}

//escrever funções padrões queserão utilizadas nos demais arquivos js
obtemValor.prototype.validaCampo = function(value){
    return value
}

export { obtemValor }