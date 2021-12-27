import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <header className="topo">
        <h1>Felipe Castanheira</h1>
        <nav>
          <h2>
            <a href="#Soft">Soft Skills</a>
            <a href="#Hard">Hard Skills</a>
          </h2>
        </nav>
      </header>
    )
  }
}
