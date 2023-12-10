import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12172328',
  database: 'userlogin',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a MySQL establecida');
  }
});

app.post("/api/logInUser", (req, res) => {
  const { email, password } = req.body;
  console.log("email: " + email);
  console.log("password: " + password);

  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
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

app.get("/api/getUser", (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      console.log('Consulta realizada correctamente');
      res.status(200).json(result);
    }
  });
});

app.get("/api/getUser/:id", (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      console.log('Consulta realizada correctamente');
      res.status(200).json(result);
    }
  });
});

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});




