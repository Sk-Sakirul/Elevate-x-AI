import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import CourseItem from '../components/CourseItem';

const courses = [
  {
    id: 2,
    title: "Backend Development",
    category: "Backend",
    duration: 30,
    level: "Beginner",
    price: 1800,
    description:
      "Learn server-side programming, API building, and basic database management.",
  },
  {
    id: 3,
    title: "Full Stack Basics",
    category: "Full Stack",
    duration: 45,
    level: "Intermediate",
    price: 2500,
    description:
      "Bridge the gap between frontend and backend with integrated web projects.",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    duration: 15,
    level: "Beginner",
    price: 999,
    description:
      "Understand user interface design principles and user experience flows.",
  },
  {
    id: 5,
    title: "Advanced JavaScript",
    category: "Frontend",
    duration: 25,
    level: "Advanced",
    price: 2000,
    description:
      "Master ES6+ features, asynchronous programming, and DOM manipulation.",
  },
  {
    id: 6,
    title: "Database Management Systems",
    category: "Backend",
    duration: 20,
    level: "Intermediate",
    price: 1500,
    description: "Design and query relational and NoSQL databases efficiently.",
  },
  {
    id: 7,
    title: "Python for Web Development",
    category: "Backend",
    duration: 35,
    level: "Beginner",
    price: 1750,
    description:
      "Use Python and frameworks like Django or Flask to build dynamic websites.",
  },
];

const CourseDetails = () => {
    let {courseId} = useParams();
    courseId = +courseId;
    let course = courses.filter((c) => c.id === courseId);
    const navigate = useNavigate();
    // console.log(course);
  return (
    <div>
      <h2>CourseDetails</h2>
      {course.map((c) => (
        <div key={c.id}>
          <h3>{c.title}</h3>
          <p>
            <strong>Category</strong> : {c.category}
          </p>
          <p>
            <strong>Duration</strong> : {c.duration}
          </p>
          <p>
            <strong>Level</strong> : {c.level}
          </p>
          <p>
            <strong>Price</strong> : {c.price}
          </p>
          <p>
            <strong>Description</strong> : {c.description}
          </p>
          <button onClick={() => navigate('/courses')}>Back to courses</button>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;