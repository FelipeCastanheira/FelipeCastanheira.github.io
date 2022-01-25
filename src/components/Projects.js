import React from 'react';
import tryunfoPrint from '../img/tryunfo-print.PNG';
import solarPrint from '../img/solarsystem-print.PNG';
import style from '../App.module.css';
import { Link } from 'react-router-dom';

const projNames = ['Tryunfo', 'Solar System'];
const projUrl = ['tryunfo', 'solarsystem'];
const imgArray = [tryunfoPrint, solarPrint];

export class Projects extends React.Component {
  render() {
    return (
      <section className={ style.projects } id="projects">
        <header className={ style.titleProj }><h4>Projetos</h4></header>
        <div>
          {projNames.map((proj, i) => (
            <Link to={`/${projUrl[i]}`} key={proj}>
              <h3>{proj}</h3>
              <img src={imgArray[i]} alt={proj} />
            </Link>
          ))}
        </div>
      </section>
    )
  }
}