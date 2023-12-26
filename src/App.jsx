import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <About />
        <Experience />
      </div>
    </>
  );
}

export default App;
