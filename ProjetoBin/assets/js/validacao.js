function conversor(numero){
    this.numero = numero

}

conversor.prototype.converteNumero = function(tipoConversor){
    switch(tipoConversor){
        case 2:
            return parseInt(this.numero, tipoConversor)
        default:

    }
}

export { conversor }