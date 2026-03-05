const http = require("http");
const PORT = 3006;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    
    res.statusCode = 200;

const html = `<!DOCTTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8" />
        <title>O MEU SERVIDOR <3</title>
        </head>
        <body>
            <h1>Bem-Vindo ao meu primeiro servidor node.js!</h1>
            <p> Este. HTML foi gerado pelo servidor </p>
        </body>
        </html>
        `;

    res.end(html)
});

server.listen(PORT, () => {
    console.log(`Servidor à escuta na porta ${PORT}`);
});