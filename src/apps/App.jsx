import './App.css';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer';
function App() {
  return (
    <div>
        <Hero/>
        <NavBar />
        <Home />
        <Projects />
        {/* <Skills /> */}
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
