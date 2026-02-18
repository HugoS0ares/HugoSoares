function contarVogais(texto) {
  const vogais = "aeiou";
  let contador = 0;

  const textoMinusculo = texto.toLowerCase();
    for (let i =0 ; i < textoMinusculo.length; i++){
        if(vogais.includes(textoMinusculo[i])){
            console.log(i)
            contador += 1;
        }     
    }
        return contador;
}

// Testes
console.assert(contarVogais("frontend") === 3, "Teste 1 falhou");
console.assert(contarVogais("AEIOU") === 5, "Teste 2 falhou");
console.assert(contarVogais("xyz") === 0, "Teste 3 falhou");
console.log("Ex03: testes concluidos");