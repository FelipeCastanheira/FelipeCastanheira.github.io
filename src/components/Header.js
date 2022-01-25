import React from 'react';
import style from '../App.module.css';

export class Header extends React.Component {
  render() {
    return (
      <header className={ style.topo }>
        <h1>Felipe Castanheira</h1>
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
