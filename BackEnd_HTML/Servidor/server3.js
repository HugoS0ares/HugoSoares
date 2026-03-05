const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url
    const metodo = req.method
    console.log(req)

    res.statusCode = 200;
    res.end(`Recebeste um ${req.method} para ${req.url}renta-aqui/carros`)
})
server.listen(PORT, () => {
    console.log(`Servidor à escuta na porta ${PORT}`);
});