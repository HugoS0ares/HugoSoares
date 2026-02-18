function somar(a,b){
    return a + b
}

console.assert(somar(2, 3) === 5, "Teste 1 falhou");
console.assert(somar(-1, 1) === 0, "Teste 2 falhou");
console.assert(somar(10, 0) === 10, "Teste 3 falhou");
console.log("Ex01: testes concluidos");