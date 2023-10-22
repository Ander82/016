const express = require('express');
const app = express();
const port = 8080; // Porta que a API vai escutar
const fs = require('fs');

app.get('/api/dados/:numero', (req, res) => {
  const numero = req.params.numero; // Obtém o número da URL
  const arquivo = `${numero}dados.json`; // Gera o nome do arquivo baseado no número

  // Lê o arquivo JSON correspondente
  fs.readFile(arquivo, 'utf8', (err, data) => {
    if (!err) {
      try {
        const dados = JSON.parse(data);
        res.json(dados); // Retorna os dados JSON
      } catch (e) {
        console.error('Erro ao analisar os dados JSON:', e);
        res.status(500).send('Erro ao analisar os dados JSON.');
      }
    } else {
      console.error('Erro ao ler o arquivo JSON:', err);
      res.status(500).send('Erro ao ler o arquivo JSON.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
