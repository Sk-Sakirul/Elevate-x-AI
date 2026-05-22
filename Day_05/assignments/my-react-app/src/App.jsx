import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import About from './pages/About';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
            <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/courses/:courseId' element={<CourseDetails />} />
              <Route path='/about'  element={<About />}/>
              <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;