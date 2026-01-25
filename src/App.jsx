import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import SectionReveal from './components/SectionReveal';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />

        <main className="pt-20">
          <SectionReveal id="home">
            <Hero />
          </SectionReveal>

          <SectionReveal id="skills" className="bg-gray-50 dark:bg-gray-800">
            <Skills />
          </SectionReveal>

          <SectionReveal id="projects">
            <Projects />
          </SectionReveal>

          <SectionReveal id="about" className="bg-gray-50 dark:bg-gray-800">
            <About />
          </SectionReveal>

          <SectionReveal id="contact">
            <Contact />
          </SectionReveal>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
