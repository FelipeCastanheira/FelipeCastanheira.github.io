import React from 'react';
import style from '../App.module.css';

export class Loader extends React.Component {
  render() {
    return (
      <section>
        {/* <div className={ style.loader }/> */}
        <div className={ style.spinner }>
          <div className={ style.bar }/>
        </div>
      </section>
    )
  }
}
