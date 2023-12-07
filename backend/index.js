const express = require("express");
const app = express();
const port = 3000;

// Middleware para manejar datos JSON en las solicitudes
app.use(express.json());

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Ruta con parámetros
app.get("/saludo/:nombre", (req, res) => {
  const { nombre } = req.params;
  res.send(`¡Hola, ${nombre}!`);
});

// Ruta para manejar solicitudes POST
app.post("/mensaje", (req, res) => {
  // const { mensaje } = req.body;
  const mensaje = JSON.stringify(req.body);
  console.log(req.body);
  res.json({ respuesta: `Recibido: ${mensaje}` });
  console.log(`${mensaje}`);
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
