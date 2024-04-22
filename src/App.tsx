import { useGSAP } from "@gsap/react";
import "./App.css";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Techstack from "./sections/Techstack";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.to("#box-effect", {
      bottom: "100vh",
      ease: "expo.inOut",
      duration: 1.5,
      delay: 0.5,
    });
  }, []);
  return (
    <>
      <main className="relative">
        <Navbar />
        <div id="box-effect" className="fixed bottom-0 w-screen h-screen bg-black-soft z-50"></div>
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
