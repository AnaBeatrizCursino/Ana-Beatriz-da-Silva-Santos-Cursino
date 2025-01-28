const express = require('express');
const db = require('../db');
const router = express.Router();

// Criar tarefa
router.post('/', (req, res) => {
  const { user_id, title, description, status, due_date } = req.body;

  db.query(
    'INSERT INTO tasks (user_id, title, description, status, due_date) VALUES (?, ?, ?, ?, ?)',
    [user_id, title, description, status, due_date],
    (err) => {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ message: 'Tarefa criada com sucesso!' });
    }
  );
});

// Listar tarefas
router.get('/', (req, res) => {
  db.query(
    'SELECT tasks.*, users.name AS user_name FROM tasks JOIN users ON tasks.user_id = users.id',
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

module.exports = router;