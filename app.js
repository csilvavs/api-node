const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API Node.js funcionando desde AWS");
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose NOSE en puerto ${port}`);
});
