import Hero from "./components/Hero";
import Divider from "./components/Divider";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Divider />
      <About />
      <Skillset />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
