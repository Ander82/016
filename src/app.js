const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Porta que a API vai escutar
const fs = require('fs');
const path = require('path'); // Módulo path para manipulação de caminhos

// Rota para /api/dados/:numero
app.get('/api/dados/:numero', (req, res) => {
  const numero = req.params.numero; // Obtém o número da URL
  const arquivo = path.join(__dirname, `${numero}.json`); // Caminho do arquivo

  // Restante do código para a rota de dados

  // ...
});

// Rota para /api/contrato/:numero
app.get('/api/contrato/:numero', (req, res) => {
  const numero = req.params.numero; // Obtém o número da URL
  const pastaContrato = path.join(__dirname, 'src', 'contrato');
  const arquivo = path.join(pastaContrato, `${numero}.json`); // Caminho do arquivo de contrato

  // Restante do código para a rota de contrato

  // ...
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
