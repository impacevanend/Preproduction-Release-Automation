// db.js
const mysql = require('mysql');
require('dotenv').config();  

// Conexión a la base de datos utilizando las variables de entorno
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.message);
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
