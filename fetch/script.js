const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/data", (req, res) => {
  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Erro ao ler o arquivo");
    }

    try {
      const jsonData = data ? JSON.parse(data) : [];
      res.json(jsonData);
    } catch (e) {
      res.status(500).send("Erro ao analisar dados JSON");
    }
  });
});

app.post("/data", (req, res) => {
  const newData = req.body;
  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let jsonData = [];

    if (!err && data) {
      try {
        jsonData = JSON.parse(data);
      } catch (e) {
        return res.status(500).send("Erro ao analisar dados JSON");
      }
    }

    jsonData.push(newData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Erro ao salvar os dados");
      }
      res.status(201).send("Dados salvos com sucesso");
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
