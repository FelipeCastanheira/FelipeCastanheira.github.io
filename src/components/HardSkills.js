import React from 'react';
import hard1 from '../img/hard1.jpg';
import hard2 from '../img/hard2.jpg';
import hard3 from '../img/hard3.jpg';
import style from '../App.module.css';

const hards = [
  {src: hard1, title: 'Gerenciamento de Projetos', txt: 'Pós-graduação e prática no dia-a-dia'},
  {src: hard2, title: 'Desenvolvimento Web', txt: 'Estudante da Trybe - Full Stack'},
  {src: hard3, 
    title: 'Graduação em Engenharia', 
    txt: '5 anos de experiência com projetos e aulas particulares'
  },
];

export class HardSkills extends React.Component {
  render() {
    return (
      <div className={ style.Hard } id="Hard">
        <header className={ style.titleSkill }><h4>Hard Skills</h4></header>
        <div className={ style.cardContainer }>
          {hards.map((hard) => (
            <div className={ style.card }  key={hard.title}>
              <p>{hard.title}</p>
              <img src={hard.src} alt={hard.title} />
              <p>{hard.txt}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
