import './App.css';
import Navbar from "./components/navbar";
import Home from './components/home';
import Skills from './components/skills';
import Project from './components/project';
import About from './components/about';
import Fotter from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <About />
      <Fotter />
      </div>
  );
}

export default App;
