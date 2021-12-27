import React from 'react';
import vistaJpg from '../img/vista.jpg';

export class AboutMe extends React.Component {
  render() {
    return (
      <section className="about-me">
        <img src={vistaJpg} alt="Felipe olhando a cidade de Santos" width="100%" />
        <div>
          <h3 className="inner-txt">
            Alguém fascinado por aprender, ensinar e ajudar pessoas.
          </h3>
        </div>
      </section>
    )
  }
}