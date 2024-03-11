import "./App.css";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Techstack from "./sections/Techstack";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main className="relative">
        <Header />
        <Projects />
        <Techstack />
        <Resume />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
