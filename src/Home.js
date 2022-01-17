import React from 'react';
import style from './App.module.css';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { HardSkills } from './components/HardSkills';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { SoftSkills } from './components/SoftSkills';


class Home extends React.Component {
  render() {

    return (
      <>
        <Header />
        <main className={ style.home }>
          <AboutMe />
          <SoftSkills />
          <HardSkills />
          <Projects />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
