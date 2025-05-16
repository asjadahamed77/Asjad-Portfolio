import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="px-4 lg:px-8 xl:px-32 dark:text-white">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
