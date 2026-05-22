// import React from 'react'
import { useParams } from 'react-router-dom';
import courses from '../data/courses';

const CourseDetails = () => {
    const {courseId} = useParams();
    const course = courses.filter((c) => c.id === courseId);
    // console.log(course);
    
  return (
    <div>
      <h3>CourseDetails</h3>
      {course &&
        course.map((c) => (
          <div key={c.id}>
            <img src={c.image} alt={c.title} width={300} height={200} />

            <h2>{c.title}</h2>

            <p>
              <strong>Instructor:</strong> {c.instructor}
            </p>

            <p>
              <strong>Duration:</strong> {c.duration}
            </p>

            <p>
              <strong>Level:</strong> {c.level}
            </p>

            <p>
              <strong>Category:</strong> {c.category}
            </p>

            <p>
              <strong>Lessons:</strong> {c.lessons}
            </p>

            <p>
              <strong>Price:</strong> ${c.price}
            </p>

            <p>{c.description}</p>
          </div>
        ))}
    </div>
  );
}

export default CourseDetails;