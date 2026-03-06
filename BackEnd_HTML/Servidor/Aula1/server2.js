const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    
    const data = {
        message: "API Online",
        timeStamp: new Date().toISOString(), 
        version: "1.0.0",
    };

    const dataJSON = JSON.stringify(data);
    res.end(dataJSON);
});

server.listen(PORT, () => {
    console.log(`Servidor à escuta na porta ${PORT}`);
});