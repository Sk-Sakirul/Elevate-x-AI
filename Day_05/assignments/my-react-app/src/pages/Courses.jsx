// import React, { useState } from "react";
import courses from "../data/courses";
import { useNavigate } from "react-router-dom";

const Courses = () => {
//   const [allCourses, setAllCourses] = useState(courses || []);
  const navigate = useNavigate();
//   console.log(allCourses);
  return (
    <div>
      <p>All Courses</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 4,
        }}
      >
        {courses.map((course) => (
          <div key={course.id}>
            <img
              src={course.image}
              alt={course.title}
              width={300}
              height={200}
            />
            <h2>{course.title}</h2>
            <p>Duration - {course.duration}</p>
            <button onClick={() => navigate(`/courses/${course.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

//
// Duration
// View Details button/link

export default Courses;
