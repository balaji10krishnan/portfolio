import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./component/features/Header/Header";
import Loading from "./component/features/Loading/Loading";

// Lazy load your sections
const Home = lazy(() => import("./component/sections/Home/Home"));
const About = lazy(() => import("./component/sections/About/About"));
const Skills = lazy(() => import("./component/sections/Skills/Skills"));
const Projects = lazy(() => import("./component/sections/Projects/Projects"));
const Contact = lazy(() => import("./component/sections/Contact/Contact"));

function App() {
  return (
    <div data-theme="">
      <Header />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}

export default App;
