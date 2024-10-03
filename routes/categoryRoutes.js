const express = require('express');
const router = express.Router();
const db = require('./../db');

// Obtener todas las categorías
router.get('/categories', (req, res) => {
    const sql = 'SELECT * FROM categories';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Crear una nueva categoría
router.post('/categories', (req, res) => {
    const { name, description } = req.body;
    const sql = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    db.query(sql, [name, description], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Categoría creada', id: result.insertId });
    });
});

// Relacionar un producto con una categoría
router.put('/products/:id/category', (req, res) => {
    const { category_id } = req.body;
    const sql = 'UPDATE products SET category_id = ? WHERE id = ?';
    db.query(sql, [category_id, req.params.id], (err) => {
        if (err) throw err;
        res.json({ message: 'Producto actualizado con categoría' });
    });
});

module.exports = router;