const express = require("express");
const app = express();

const port = 3000;
app.use(express.json())


const marcacoes = [
        { id: 1, cliente: "Ana Silva", servico: "Consulta", data: "2026-03-01", hora: "09:00" },
        { id: 2, cliente: "Bruno Costa", servico: "Exame", data: "2026-03-01", hora: "10:00" },
        { id: 3, cliente: "Carla Dias", servico: "Revisao", data: "2026-03-02", hora: "11:00" }
    ];


app.get("/", (req, res) => {
    res.json({mensagem:"Servidor a funcionar!"})
})


app.get("/api/info", (req, res) => {
    res.json({
        nome:"API Clinica saude+",
        versao: "1.0.0",
        data: new Date().toISOString(),
    })
})

app.get("/api/marcacoes", (req, res) => {
    res.json(marcacoes);
});

app.get("/api/marcacoes/:id", (req, res) => {
    const id = Number(req.params.id)
    console.log(id)

    const marcacao = marcacoes.find(marcacao =>  marcacao.id === id);

        if (!marcacao){
            return res.status(404).json({erro: " Marcação não encontrada"});
        }
    res.json(marcacao);
});


app.listen(port, () => {
    console.log(`Servidor a correr na porta ${port}`);
});
