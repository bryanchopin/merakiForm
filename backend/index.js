const express = require("express");
const app = express();
const port = 3000;
const mysql = require('mysql');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario_mysql',
  password: 'tu_contraseña_mysql',
  database: 'tu_base_de_datos',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a MySQL establecida');
  }
});

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

app.post("/logInUser", (req, res) => {

  const { email, password } = req.body;

  // Aquí puedes realizar la inserción en tu base de datos
  const sql = 'INSERT INTO usuarios (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error al insertar en la base de datos:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      console.log('Usuario insertado correctamente');
      res.status(200).json({ success: true });
    }
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
