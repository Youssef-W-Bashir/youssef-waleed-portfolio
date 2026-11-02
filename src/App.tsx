import BackToTop from '@/components/common/BackToTop';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Community from '@/components/sections/Community';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Community />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
