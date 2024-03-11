import "./App.css";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Techstack from "./sections/Techstack";

function App() {
  return (
    <>
      <header className="relative">
        <Header />
      </header>
      <main className="relative">
        <Projects />
        <Techstack />
        <Resume />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
