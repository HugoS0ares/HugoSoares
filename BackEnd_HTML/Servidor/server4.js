const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    

    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Página Inicial" }));
        return;
    }
    

    if (req.url === "/sobre" && req.method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Sobre Nós" }));
        return;
    }
    

    if (req.url === "/contactos" && req.method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Contactos" }));
        return;
    }

    res.statusCode = 404; 
    res.end(JSON.stringify({ error: "Página não encontrada." }));
}); 

server.listen(PORT, () => {
    console.log(`Servidor à escuta na porta ${PORT}`);
});