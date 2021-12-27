import React from 'react';
import todoPrint from '../img/todo-print.png';
import pixelsPrint from '../img/pixels-print.png';
import shoppingPrint from '../img/shopping-print.png';

const projNames = ['Todo-List', 'Pixels-Art', 'Shopping Cart'];
const projUrl = ['todo-list', 'pixels-art', 'shopping-cart'];
const imgArray = [todoPrint, pixelsPrint, shoppingPrint];

export class Projects extends React.Component {
  render() {
    return (
      <section className="projects">
        <header className="title-proj"><h4>Projetos</h4></header>
        <div>
          {projNames.map((proj, i) => (
            <button onClick={() => window.open(`../Projetos/${projUrl[i]}/index.html`)} key={proj}>
              <h3>{proj}</h3>
              <img src={imgArray[i]} alt={proj} />
            </button>
          ))}
        </div>
      </section>
    )
  }
}