import React from 'react';
import vistaJpg from '../img/vista.jpg';
import style from '../App.module.css';

export class AboutMe extends React.Component {
  render() {
    return (
      <section className={ style.aboutMe }>
        <img src={vistaJpg} alt="Felipe olhando a cidade de Santos" width="100%" />
        <h3 className={ style.innerTxt }>
          <form id="form">
            <p>Alguém fascinado por aprender,</p>
            <p>ensinar e ajudar pessoas.</p>
          </form>
        </h3>
      </section>
    )
  }
}