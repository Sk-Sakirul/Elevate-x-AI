import React from "react";
import { useNavigate } from "react-router-dom";

const CourseItem = React.memo(({ course }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{course.title}</h3>
      <p>
        <strong>Category</strong> : {course.category}
      </p>
      <p>
        <strong>Duration</strong> : {course.duration}
      </p>
      <p>
        <strong>Level</strong> : {course.level}
      </p>
      <p>
        <strong>Price</strong> : {course.price}
      </p>
      <button onClick={() => navigate(`/courses/${course.id}`)}>
        View Details
      </button>
      <button>Save Course</button>
    </div>
  );
})

export default CourseItem;
