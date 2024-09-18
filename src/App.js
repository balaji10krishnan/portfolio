import logo from "./logo.svg";
import "./App.css";
import Header from "./component/features/Header/Header";
import Home from "./component/sections/Home/Home";
import About from "./component/sections/About/About";
import Skills from "./component/sections/Skills/Skills";
import Projects from "./component/sections/Projects/Projects";
import Contact from "./component/sections/Contact/Contact";

function App() {
  return (
    <div data-theme="">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
