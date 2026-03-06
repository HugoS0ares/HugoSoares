const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // Imprime a mensagem na consola do servidor
    console.log("Recebi um pedido na rota principal!"); 
    // Envia a resposta de volta para o browser/cliente
    res.send("Olá mundo!"); 
});

app.listen(port, () => {
    console.log(`Servidor a correr na porta ${port}`);
});