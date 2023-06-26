import Code from "./components/Hero/Code";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <div className="w-1/2 hidden md:block">
        <Code></Code>
      </div>
      <div className="md:absolute md:top-16 md:right-96">
        <Hero></Hero>
      </div>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default App;
