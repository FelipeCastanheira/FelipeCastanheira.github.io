import React from 'react';
import teach1 from '../img/teach1.jpg';
import teach2 from '../img/teach2.jpg';
import teach3 from '../img/teach3.jpg';
import style from '../App.module.css';

const softs = [
  {src: teach1, title: 'Foco na Prática', txt: 'Aula flexível e personalizada para você'},
  {src: teach2, title: 'Didática', txt: '6 anos de experiência com aulas particulares'},
  {src: teach3, title: 'Projetos', txt: 'Você também pode aprender desenvolvendo projetos'},
];

export class TeacherSkills extends React.Component {
  render() {
    return (
      <div className={ style.Soft } id="Soft">
        <header className={ style.titleSkill }><h4>Por que ter aulas o Felipe?</h4></header>
        <br/>
        <div className={ style.cardContainer }>
          {softs.map((soft) => (
            <div className={ style.card }  key={soft.title}>
              <p>{soft.title}</p>
              <img src={soft.src} alt={soft.title} />
              <p>{soft.txt}</p>
            </div>
          ))}
        </div>
        <a href='#form'>Fale Comigo</a>
      </div>
    )
  }
}
