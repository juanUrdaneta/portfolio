import "./App.css";
import Header from "./sections/Header";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Projects />
        {/* <section>
          <h1>Skills</h1>
        </section>
        <section>
          <h1>About me</h1>
        </section> */}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
