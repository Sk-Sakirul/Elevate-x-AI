import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Welcome to the Course Dashboard App</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae laudantium minus tempora.</p>
        <button onClick={() => navigate('/courses')}>go to courses</button>
    </div>
  )
}

export default Home;