import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* <h2>Navbar</h2> */}
      <p style={{}}>Current Theme: {theme}</p>
      <button onClick={() => toggleTheme()}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default Navbar;