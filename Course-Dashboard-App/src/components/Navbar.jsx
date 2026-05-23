import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div>
        <Link style={{ margin: "0 10px" }} to="/">
          Home
        </Link>
        <Link style={{ margin: "0 10px" }} to="/courses">
          Courses
        </Link>
        <Link style={{ margin: "0 10px" }} to="saved-courses">
          Saved Courses
        </Link>
        <Link style={{ margin: "0 10px" }} to="/about">
          About
        </Link>
      </div>

      <button
        style={{ width: "200px", padding: "6px" }}
        onClick={() => toggleTheme()}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </>
  );
}

export default Navbar;