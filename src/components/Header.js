import React from 'react';
import style from '../App.module.css';
import whiteLogoFC from '../img/logosFC/logoFc.png';

export class Header extends React.Component {
  render() {
    return (
      <header className={ style.topo }>
        <div>
          <img src={ whiteLogoFC } alt="logo branca FC" />
          <h1>Felipe Castanheira</h1>
        </div>
        <nav>
          <h2>
            <a href="#Soft">Sobre Mim</a>
            <a href="#projects">Portfólio</a>
          </h2>
        </nav>
      </header>
    )
  }
}
