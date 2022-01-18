import style from './Tryunfo.module.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class Tryunfo extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsList: [],
      nameFilter: '',
      rareFilter: 'todas',
      isTrunfoFilter: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardsList,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      cardsList: [...cardsList, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo || hasTrunfo,
    });
  }

  handleFilter({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }), () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const allInputs = cardName && cardDescription && cardImage && cardRare;
      const attr1 = Number(cardAttr1);
      const attr2 = Number(cardAttr2);
      const attr3 = Number(cardAttr3);
      const totalAttr = (attr1 + attr2 + attr3);
      const maxLim = 210;
      const attrLim = 90;
      const maxTotal = totalAttr <= maxLim;
      const maxAttr = (attr1 <= attrLim) && (attr2 <= attrLim) && (attr3 <= attrLim);
      const minAttr = (attr1 >= 0) && (attr2 >= 0) && (attr3 >= 0);
      const isEnabled = allInputs && maxTotal && maxAttr && minAttr;
      this.setState({ isSaveButtonDisabled: !isEnabled });
    });
  }

  removeCard(title) {
    const { cardsList } = this.state;
    const cardsArray = cardsList.filter(({ cardName }) => cardName !== title);
    const hasTryunfo = cardsArray.some(({ cardTrunfo }) => cardTrunfo);
    this.setState(({
      cardsList: cardsArray,
      hasTrunfo: hasTryunfo,
    }));
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      cardsList,
      nameFilter,
      rareFilter,
      isTrunfoFilter,
    } = this.state;
    return (
      <div className={ style.tryunfo }>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleSave }
          />
          <aside>
            <h2>Pré-visualização</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </aside>
        </main>
        <section className={ style.allCards }>
          <h2>Todas as Cartas</h2>
          {cardsList
            .filter((card) => card.cardName.includes(nameFilter)
              && (card.cardRare === rareFilter || rareFilter === 'todas')
              && (!isTrunfoFilter || card.cardTrunfo))
            .map((card) => (
              <div className={ style.box } key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(card.cardName) }
                  type="button"
                >
                  Excluir
                </button>
              </div>
            ))}
          <div className={ style.col } ke>
            <label htmlFor="name-filter">
              <h5>Pesquisar</h5>
              <input
                type="text"
                data-testid="name-filter"
                value={ nameFilter }
                name="nameFilter"
                onChange={ this.handleFilter }
              />
            </label>
            <select
              data-testid="rare-filter"
              value={ rareFilter }
              name="rareFilter"
              onChange={ this.handleFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
            <label htmlFor="trunfo-filter">
              <h5>Super Trunfo</h5>
              <input
                type="checkbox"
                data-testid="trunfo-filter"
                checked={ isTrunfoFilter }
                name="isTrunfoFilter"
                onChange={ this.handleFilter }
              />
            </label>
          </div>
        </section>
      </div>
    );
  }
}

export default Tryunfo;
