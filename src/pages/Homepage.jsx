import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../layout/Skills";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
