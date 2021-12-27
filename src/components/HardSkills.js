import React from 'react';
import hard1 from '../img/hard1.jpg';
import hard2 from '../img/hard2.jpg';
import hard3 from '../img/hard3.jpg';

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
      <div className="Hard">
        <header className="title-skill"><h4>Hard Skills</h4></header>
        <div className="card-container">
          {hards.map((hard) => (
            <div className="card"  key={hard.title}>
              {hard.title} <br /><img src={hard.src} alt={hard.title} />
              <p>{hard.txt}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}