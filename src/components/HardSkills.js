import React from 'react';
import hard1 from '../img/hard1.jpg';
import hard2 from '../img/hard2.jpg';
import hard3 from '../img/hard3.jpg';
import style from '../App.module.css';

const hards = [
  {src: hard1, title: 'JavaScript', txt: 'Com JS você pode desenvolver Front e Back End'},
  {src: hard2, title: 'React JS', txt: 'Projetos de Front End simples e eficazes!'},
  {src: hard3, 
    title: 'Desenvolvimento Web', 
    txt: 'HTML semântico, CSS responsivo e JS'
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
