const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 42 },
  { name: "Kabir", marks: 76 },
  { name: "Sneha", marks: 35 },
  { name: "Vikram", marks: 90 },
];


const passedStudents = students.filter((student) => student.marks >= 50);
const passedNames = passedStudents.map((student) => student.name);

const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);
const averageMarks = totalMarks / students.length;

console.log("Passed Students : ", passedStudents);
console.log("Passed Students Names : ", passedNames);
console.log("Average Marks : ", averageMarks);