const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Porta que a API vai escutar
const fs = require('fs');
const path = require('path'); // Módulo path para manipulação de caminhos

app.get('/api/dados/:numero', (req, res) => {
  const numero = req.params.numero; // Obtém o número da URL
  const arquivo = path.join(__dirname, `${numero}.json`); // Caminho do arquivo
  console.log(`Tentando ler o arquivo: ${arquivo}`);
  // Verifique se o arquivo existe antes de tentar lê-lo
  fs.access(arquivo, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`O arquivo ${arquivo} não foi encontrado.`);
      res.status(404).send('Arquivo não encontrado.');
    } else {
      // O arquivo existe, leia e retorne os dados
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
    }
  });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
