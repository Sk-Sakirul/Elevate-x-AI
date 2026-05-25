const express = require('express');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();

app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Working...');
})

app.get('/public', (req, res) => {
    res.send(
      "Welcome! This is a public route and can be accessed without authentication.",
    );
})

app.get('/profile', authMiddleware, (req, res) => {
    res.status(200).json({
      name: "Student User",
      role: "Developer",
    });
})

app.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({
      totalProjects: 12,
      completedTasks: 45,
      pendingTasks: 8,
      activeUsers: 25,
      notifications: 3,
      messages: 7,
      revenue: 15000,
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})