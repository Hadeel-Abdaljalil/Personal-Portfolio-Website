import Navbar from "../Navbar/Navbar";
import TSParticles from "../Particles/TSParticles";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <div className="header-container" id="home">
        <div id="particle-canvas">
          <TSParticles />
        </div>
        <div className="text-overlay">
          <Header />
        </div>
      </div>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}