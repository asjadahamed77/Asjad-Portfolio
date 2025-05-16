
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {

  

 
 

  return (
    <div className="px-4 lg:px-8 xl:px-32 dark:text-white">
      <Navbar />
 <Header />
     
    <About />

    <Projects />
    </div>
  );
}

export default App;
