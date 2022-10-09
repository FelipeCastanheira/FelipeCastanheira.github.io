import React from 'react';
import style from './App.module.css';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { HardSkills } from './components/HardSkills';
import { Header } from './components/Header';
import { TeacherSkills } from './components/TeacherSkills';
import WhatsBtn from './components/WhatsBtn';


class Teach extends React.Component {
  render() {

    return (
      <div>
        <Header title="Aulas Particulares" />
        <main className={ style.home }>
          <AboutMe />
          <TeacherSkills />
          <HardSkills />
        </main>
        <Footer />
        <WhatsBtn/>
      </div>
    );
  }
}

export default Teach;
