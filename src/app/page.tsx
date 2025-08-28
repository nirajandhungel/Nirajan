import About from "./about/page";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./contact/page";


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About/>
      <Contact/>

    </main>
  );
} 