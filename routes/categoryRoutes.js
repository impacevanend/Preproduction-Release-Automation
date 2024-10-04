const express = require('express');
const router = express.Router();
const db = require('./../db');

// Obtener todas las categorías
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM categories';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Crear una nueva categoría
router.post('/', (req, res) => {
    const { name, description } = req.body;
    const sql = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    db.query(sql, [name, description], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Categoría creada', id: result.insertId });
    });
});


// Eliminar una categoría por su ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM categories WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la categoría', error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.json({ message: 'Categoría eliminada con éxito' });
    });
});


module.exports = router;