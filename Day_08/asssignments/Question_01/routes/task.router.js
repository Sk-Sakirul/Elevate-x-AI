const express = require('express');

const router = express.Router();

const tasks = [
  { id: 1, title: "Revise Node.js", completed: false },
  { id: 2, title: "Practice Express routes", completed: true },
];

router.get('/tasks', (req, res) => {
    res.status(200).json(tasks)
});

router.get('/tasks/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let task = tasks.find((t) => t.id === id);
    if(!task) {
        return res.status(404).json({
            error : "Task not found"
        })
    }

    res.status(200).json(task);
})

router.post('/tasks', (req, res) => {
    const {title} = req.body;

    if(!title){
        return res.status(404).json({
            error : "Title is required"
        })
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

router.delete('/tasks/:id', (req, res) => {
    let id  = parseInt(req.params.id);

    const taskIndex = tasks.findIndex((t) => t.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    tasks.splice(taskIndex, 1);

    res.status(200).json({
      message: "Task deleted successfully",
    });
})

module.exports = router;