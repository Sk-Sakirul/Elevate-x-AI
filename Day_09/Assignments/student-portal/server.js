const express = require("express");
const loggerMiddleware = require("./midleware/loggerMiddleware");

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

const students = [
  { id: 1, name: "Aman", course: "Backend" },
  { id: 2, name: "Riya", course: "Frontend" },
  { id: 3, name: "Kabir", course: "Full Stack" },
];

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Student Portal");
});

app.get("/about", (req, res) => {
  res.status(200).send("This portal is used to manage student data");
});

app.get("/students", (req, res) => {
  res.status(200).send(students);
});

app.get("/students/:id", (req, res) => {
  let id = parseInt(req.params.id);

  let student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: "Student not found.",
    });
  }

  res.status(200).send(student);
});

app.post("/login", (req, res) => {
  res.status(200).json({ message: "Login route called" });
});

app.listen(5000, () => {
  console.log(`Server is listening on port http://localhost:5000`);
});
