import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Different Components (in order)
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
