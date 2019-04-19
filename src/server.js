const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "*:*" });

io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

// Conectando ao mongodb
mongoose.connect(
  "mongodb+srv://rmeira:p9mPsQ688RQASRx@cluster0-1qw9w.mongodb.net/oministack?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

// Recebimento em formato json e resposta em formato json
app.use(express.json());

// Permite o envio de arquivo para o nodejs
app.use(express.urlencoded({ extended: true }));

// Rota de redirecionamento para os arquivos
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

// Arquivos de rotas da aplicação
app.use(require("./routes"));

app.listen(process.env.PORT || 3333);
