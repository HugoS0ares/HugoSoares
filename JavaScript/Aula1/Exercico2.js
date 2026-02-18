function ehPar(n){
    const resultado = n % 2 ===0;
    return n % 2 === 0;
}
 // O operador % devolve o resto da divisão. 
// Se o resto de n por 2 for 0, o número é par.

// Testes fornecidos
console.assert(ehPar(4) === true, "Teste 1 falhou");
console.assert(ehPar(7) === false, "Teste 2 falhou");
console.assert(ehPar(0) === true, "Teste 3 falhou");

console.log("Ex02: testes concluidos");