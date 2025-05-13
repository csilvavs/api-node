const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API Node.js funcionando desde AWS cap de prueba Vnetura Soluciones");
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose O en puerto ${port}`);
});
