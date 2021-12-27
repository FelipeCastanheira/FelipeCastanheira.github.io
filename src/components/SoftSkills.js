import React from 'react';
import soft1 from '../img/soft1.jpg';
import soft2 from '../img/soft2.jpg';
import soft3 from '../img/soft3.jpg';

const softs = [
  {src: soft1, title: 'Autoliderança', txt: 'Gestão do tempo e aprendizagem rápida'},
  {src: soft2, title: 'Contribuição', txt: 'Motivação dobrada ao trabalhar em equipe'},
  {src: soft3, title: 'Pensamento Crítico', txt: 'Facilidade em solucionar problemas logico-matemáticos'},
];

export class SoftSkills extends React.Component {
  render() {
    return (
      <div className="Soft">
        <header className="title-skill"><h4>Soft Skills</h4></header>
        <div className="card-container">
          {softs.map((soft) => (
            <div className="card"  key={soft.title}>
              {soft.title} <br /><img src={soft.src} alt={soft.title} />
              <p>{soft.txt}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}