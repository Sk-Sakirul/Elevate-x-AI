const express = require('express');
const tasksRouter = require('./routes/task.router');
// const tasks = require('./data/tasks');

const app = express();
const PORT = 3000;
// let allTasks = tasks
// console.log(allTasks);


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message : "Working..."
    })
});

app.use('/', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})