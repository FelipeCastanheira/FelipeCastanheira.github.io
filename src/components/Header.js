import React from 'react';
import style from '../App.module.css';
import whiteLogoFC from '../img/logosFC/logoFc.png';

export class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <header className={ style.topo }>
        <div className="topo-main">
          <img src={ whiteLogoFC } alt="logo branca FC" />
          <h1>{ title || 'Felipe Castanheira' }</h1>
        </div>
        <nav>
          <h2>
            <a href="#Soft">Sobre Mim</a>
            <a href="https://wa.me/message/7TZJV2L3ADCXA1">Contato</a>
          </h2>
        </nav>
      </header>
    )
  }
}
