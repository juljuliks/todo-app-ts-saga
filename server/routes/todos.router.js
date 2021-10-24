const router = require('express').Router();
const db = require('../db/models');

router.get('/', async (req, res) => {
  let todos;
  try {
    todos = await db.Todo.findAll({ where: { userId: req.session.user.id }, order: [['id', 'ASC']] });
  } catch (e) {
    console.log(e);
  }
  res.json(todos);
});

router.post('/', async (req, res) => {
  const { body } = req.body;
  let todo;
  try {
    todo = await db.Todo.create({ body, userId: req.session.user.id });
  } catch (e) {
    console.log(e);
  }
  res.json(todo);
});

router.put('/:todoId', async (req, res) => {
  try {
    await db.Todo.update(req.body, { where: { id: req.params.todoId } });
  } catch (e) {
    console.log(e);
  }
  res.sendStatus(200);
});

router.delete('/:todoId', async (req, res) => {
  try {
    await db.Todo.destroy({ where: { id: req.params.todoId } });
  } catch (e) {
    console.log(e);
  }
  res.sendStatus(200);
});

module.exports = router;
