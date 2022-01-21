import './App.css';

// Different Components
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Work from "./components/Work";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
