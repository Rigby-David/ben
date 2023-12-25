import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <About />
      </div>
    </>
  );
}

export default App;
