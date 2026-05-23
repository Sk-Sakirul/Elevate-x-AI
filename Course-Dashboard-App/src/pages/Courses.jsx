import React, { useContext, useMemo, useRef, useState } from "react";
import CourseItem from "../components/CourseItem";
import { ThemeContext } from "../context/ThemeProvider";

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

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const inputRef = useRef(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase()),
      )
      .filter((course) =>
        course.category.toLowerCase().includes(category.toLowerCase()),
      );
  }, [search, category]);

  // console.log(category)

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <input
          ref={inputRef}
          style={{ width: "200px", padding: "6px" }}
          type="text"
          value={search}
          placeholder="Search course by name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{ width: "40px", padding: "5px" }}
          onClick={() => inputRef.current.focus()}
        >
          focus
        </button>
      </div>
      <button
        style={{ width: "200px", padding: "6px" }}
        onClick={() => toggleTheme()}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <select
        style={{ width: "200px", padding: "6px" }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="ai">AI</option>
        <option value="data">Data</option>
      </select>
      <p>showing {filteredCourses.length} courses</p>
      {filteredCourses.length === 0 ? (
        <p>Course Not Found</p>
      ) : (
        <div className="courses-container">
          {filteredCourses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </>
  );
};

export default Courses;
