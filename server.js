const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Importa las rutas y la conexión a la base de datos
// Productos
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
// Categorias
const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api/categories', categoryRoutes);

// Servidor corriendo en el puerto 3000
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});
