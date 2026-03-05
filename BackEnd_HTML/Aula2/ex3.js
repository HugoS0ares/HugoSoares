console.log("Inicio")
console.log("1")
console.log("2")
console.log("3")
console.log("Fim")

function Assincrono() {
    console.log("\nAssicrono (settimeout)");
    console.log("1) Inicio");

    setTimeout(() => {
        console.log("3) Isto aparece depois de 10 segundos");
        // Se quiseres usar o fim(), tens de criar a função primeiro.
        // fim(); 
    }, 10000); 

    console.log("2) Esta linha aparece antes do timeout!");
}

// tens de invocar (chamar) a função para ela executar!
Assincrono();
