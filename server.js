const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Importa las rutas y la conexión a la base de datos
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Servidor corriendo en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
