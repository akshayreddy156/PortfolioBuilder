import "./App.css";
import Profile from "./components/profile";
import Navbar from "./components/navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import { ThemeContextProvider } from "./context/ThemeContext";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Education from "./components/education";
import Certification from "./components/certification";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Copyright from "./components/copyright";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ParticlesBackground />
        <Navbar />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        {/* <Certification /> */}
        <Contact />
        <Footer />
      </ThemeContextProvider>
      <Copyright />
    </>
  );
}

export default App;
