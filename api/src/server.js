const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Respondendo a requisição da raiz")
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Estou na porta ${PORT}`));