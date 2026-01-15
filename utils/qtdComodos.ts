

export function gerarNumeroAleatorio(min=2, max=10){
    const numero = Math.floor(Math.random() * (max-min+1)) + min
    return numero
}

export function qtdComodos(){
    const hospedes = gerarNumeroAleatorio()
    const minQuartos = Math.trunc(hospedes/2)
    const quartos = gerarNumeroAleatorio(minQuartos,hospedes)
    const camas = gerarNumeroAleatorio(quartos, quartos*2)
    const banheiros = gerarNumeroAleatorio(minQuartos, hospedes)
    return {hospedes, quartos, camas, banheiros}
}