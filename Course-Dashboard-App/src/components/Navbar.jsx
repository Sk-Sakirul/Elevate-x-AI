import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
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
  );
}

export default Navbar;