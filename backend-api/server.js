// backend-api/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configuración del Pool de Conexión a MySQL/MariaDB (cPanel)
const pool = mysql.createPool({
  host: 'localhost',      // En cPanel suele ser localhost
  user: 'root',           // Reemplaza con tu usuario de MySQL de cPanel
  password: '',           // Reemplaza con tu contraseña de MySQL de cPanel
  database: 'db_softpp_web', // Reemplaza con tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();


app.post('/api/auth/login', async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ success: false, message: 'Datos incompletos.' });
  }

  try {
    // Generar el hash SHA-256 de la contraseña ingresada
    const hashedPass = crypto.createHash('sha256').update(password).digest('hex');

    // Consulta SQL adaptada al estándar de tu script db_softpp_web
    const query = `
      SELECT * FROM usuarios 
      WHERE username = ? AND password_hash = ? AND rol = ? 
      LIMIT 1
    `;

    const [rows] = await pool.execute(query, [username, hashedPass, role]);

    if (rows && rows.length > 0) {
      const userObj = rows[0]; // Acceso seguro al primer registro del array
      return res.status(200).json({
        success: true,
        message: 'Acceso concedido',
        user: userObj.usuario,
        role: userObj.rol
      });
    } else {
      return res.status(401).json({ 
        success: false, 
        message: 'Usuario, contraseña o rol incorrectos.' 
      });
    }

  } catch (error) {
    // ESTO MOSTRARÁ EL ERROR REAL EN TU TERMINAL DEL BACKEND
    console.error('--- ERROR CRÍTICO EN BASE DE DATOS ---');
    console.error(error.message);
    console.error('--------------------------------------');
    
    return res.status(500).json({ 
      success: false, 
      message: `Error interno en el servidor: ${error.message}` 
    });
  }
});


// Inicialización del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});
