import React from 'react';
import soft1 from '../img/soft1.jpg';
import soft2 from '../img/soft2.jpg';
import soft3 from '../img/soft3.jpg';
import style from '../App.module.css';

const softs = [
  {src: soft1, title: 'Autoliderança', txt: 'Gestão do tempo e aprendizagem rápida'},
  {src: soft2, title: 'Contribuição', txt: 'Motivação dobrada ao trabalhar em equipe'},
  {src: soft3, title: 'Pensamento Crítico', txt: 'Facilidade em solucionar problemas logico-matemáticos'},
];

export class SoftSkills extends React.Component {
  render() {
    return (
      <div className={ style.Soft }>
        <header className={ style.titleSkill }><h4>Soft Skills</h4></header>
        <div className={ style.cardContainer }>
          {softs.map((soft) => (
            <div className={ style.card }  key={soft.title}>
              <p>{soft.title}</p>
              <img src={soft.src} alt={soft.title} />
              <p>{soft.txt}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}