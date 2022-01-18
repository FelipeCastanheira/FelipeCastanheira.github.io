import React from 'react';
import PropTypes from 'prop-types';
import imgPc from '../img/imgPc.jpeg';
import logoT from '../img/logoT.png';
import style from '../Tryunfo.module.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className={ style.cardContainer }>
        <div className={ style.fullCard }>
          <h4 data-testid="name-card">{cardName}</h4>
          <div className={ style.cardImg }>
            {
              cardImage
                ? <img src={ cardImage } alt={ cardName } data-testid="image-card" />
                : <img src={ imgPc } alt="notebook" data-testid="image-card" />

            }
            <div className={ style.greenBox} />
            {
              cardTrunfo
                && <img src={ logoT } alt="super trunfo" className={ style.logoTrunfo } />
            }
          </div>
          <div className={ style.whiteBox } />
          <div className={ style.skillsContainer }>
            <h5>
              Attr1.............
              <span data-testid="attr1-card">{cardAttr1}</span>
            </h5>
            <h5>
              Attr2.............
              <span data-testid="attr2-card">{cardAttr2}</span>
            </h5>
            <h5>
              Attr3.............
              <span data-testid="attr3-card">{cardAttr3}</span>
            </h5>
            <h6 data-testid="rare-card">{cardRare}</h6>
            {/* <h6 data-testid={ cardTrunfo ? 'trunfo-card' : '' }>
              {cardTrunfo ? 'Super Trunfo' : ''}
            </h6> */}
          </div>
        </div>
        <p data-testid="description-card">{cardDescription}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
