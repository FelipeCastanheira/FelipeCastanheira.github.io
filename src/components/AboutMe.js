import React from 'react';
import vistaJpg from '../img/vista.jpg';
import style from '../App.module.css';

export class AboutMe extends React.Component {
  render() {
    return (
      <section className={ style.aboutMe }>
        <img src={vistaJpg} alt="Felipe olhando a cidade de Santos" width="100%" />
        <div>
          <h3 className={ style.innerTxt }>
            Alguém fascinado por aprender, ensinar e ajudar pessoas.
          </h3>
        </div>
      </section>
    )
  }
}