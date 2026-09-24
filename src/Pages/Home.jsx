import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certificates";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}