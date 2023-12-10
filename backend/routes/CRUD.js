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