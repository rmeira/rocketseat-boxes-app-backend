const express = require('express');

const app = express();

// Recebimento em formato json e resposta em formato json
app.use(express.json())

// Permite o envio de arquivo para o nodejs
app.use(express.urlencoded({ extended: true }));

// Arquivos de rotas da aplicação
app.use(require('./routes'));

app.listen(3333);