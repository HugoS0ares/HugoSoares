function somar(a,b){
    const Resultado = a + b;
    return Resultado
}

const total = somar(10,5);
    console.log(total)

function calcularDesconto(preço, percentagem){
    if (percentagem < 0 || percentagem >100){
        return "Percentagem inválida"
    }
    
    const taxa = percentagem / 100
    const preçoDesconto = preço - preço * taxa
    return preçoDesconto
}

console.log("Preço final:", calcularDesconto(80,25))