import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider';

const Content = () => {
    const { theme} = useContext(ThemeContext);
  return (
    <div style={theme === 'dark' ? {backgroundColor: "black", color : "white"} : {backgroundColor : "white", color : "black"}}>
      <h2>Content Page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sed impedit tenetur.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  );
}

export default Content;