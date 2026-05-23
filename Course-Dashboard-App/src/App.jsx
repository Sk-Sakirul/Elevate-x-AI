import React, { useContext } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import SavedCourses from './pages/SavedCourses';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import About from './pages/About';
import CourseDetails from './pages/CourseDetails';
import { ThemeContext } from './context/ThemeProvider';

const App = () => {
    const { theme} = useContext(ThemeContext)
  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/saved-courses" element={<SavedCourses />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;