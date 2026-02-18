//LOOPS 

// REPETIR INSTRUÇÕES

for (let i=1; i<=5; i++){
    console.log("Número atual:", i)
}

let tentativas = 0;

while (tentativas < 3){
    console.log("Tentativa", tentativas +1);
    tentativas +=1 // Igual a tentativas = tentativas + ;
}

let pagina = 1;

do {
    console.log("Carregar Página",pagina)
    pagina +=1;
} while (pagina <=2);

for (let i = 0; i <= 10; i++){
    if (i === 3){
        continue;
    }
}