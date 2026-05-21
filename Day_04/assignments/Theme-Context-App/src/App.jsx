import Content from "./components/Content";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
        <Navbar />
        <Content />
    </ThemeProvider>
  )
}

export default App;