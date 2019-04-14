const multer = require("multer"); // Modulo para armazer arquivos no node
const path = require("path"); // Modulo para padrinizar os caminhos em diferentes plataformas
const crypto = require("crypto"); // Biblioteca que gera bytes e strings

module.exports = {
  // Destino onde será salvo os arquivos
  dest: path.resolve(__dirname, "..", "..", "tmp"),
  storage: multer.diskStorage({
    // Também é o destino que será salvo
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp"));
    },
    // Definir o nome que será salvo o arquivo
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, file.key);
      });
    }
  })
};
