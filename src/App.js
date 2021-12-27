import './App.css';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { HardSkills } from './components/HardSkills';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { SoftSkills } from './components/SoftSkills';


function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <SoftSkills />
        <HardSkills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
