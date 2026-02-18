function maiorNumero(lista){
    let maior = lista[0];

for (let i = 1; i < lista.length; i++){
    if(lista[i] > maior){
        maior = lista[i];
    }
}
return maior;
}

// Testes
console.assert(maiorNumero([3, 8, 2]) === 8, "Teste 1 falhou");
console.assert(maiorNumero([-5, -1, -10]) === -1, "Teste 2 falhou");
console.assert(maiorNumero([7]) === 7, "Teste 3 falhou");
console.log("Ex05: testes concluidos");