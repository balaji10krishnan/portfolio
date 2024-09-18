import logo from "./logo.svg";
import "./App.css";
import Header from "./component/features/Header/Header";
import Home from "./component/sections/Home/Home";
import About from "./component/sections/About/About";

function App() {
  return (
    <div data-theme="">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
