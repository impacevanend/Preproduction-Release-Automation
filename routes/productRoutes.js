const express = require('express');
const router = express.Router();
// Utiliza la conexión desde db.js
const db = require('./../db');

// Obtener todos los productos
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Crear un nuevo producto
router.post('/', (req, res) => {
    const { name, price, description } = req.body;
    const sql = 'INSERT INTO products (name, price, description) VALUES (?,?,?)';
    db.query(sql, [name, price, description], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Producto creado', id: result.insertId });
    });
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Actualizar un producto por ID
router.put('/:id', (req, res) => {
    const { name, price, description } = req.body;
    const sql = 'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?';
    db.query(sql, [name, price, description, req.params.id], (err) => {
        if (err) throw err;
        res.json({ message: 'Producto actualizado' });
    });
});

// Eliminar un producto por ID
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({ message: 'Producto eliminado' });
    });
});

module.exports = router;
