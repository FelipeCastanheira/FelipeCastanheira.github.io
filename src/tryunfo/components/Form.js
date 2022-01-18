import React from 'react';
import PropTypes from 'prop-types';
import style from '../Tryunfo.module.css';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const inputs = [
      { testeid: 'name-input',
        type: 'text',
        name: 'cardName',
        prop: cardName,
        title: 'Nome',
      },
      {
        testeid: 'description-input',
        type: 'textarea',
        name: 'cardDescription',
        prop: cardDescription,
        title: 'Descrição',
      },
      { testeid: 'attr1-input',
        type: 'number',
        name: 'cardAttr1',
        prop: cardAttr1,
        title: 'Atributo 1',
      },
      { testeid: 'attr2-input',
        type: 'number',
        name: 'cardAttr2',
        prop: cardAttr2,
        title: 'Atributo 2',
      },
      { testeid: 'attr3-input',
        type: 'number',
        name: 'cardAttr3',
        prop: cardAttr3,
        title: 'Atributo 3',
      },
      { testeid: 'image-input',
        type: 'text',
        name: 'cardImage',
        prop: cardImage,
        title: 'Imagem',
      },
    ];

    return (
      <form>
        <header><h1>Adicionar nova carta</h1></header>
        {inputs.map(({ testeid, type, name, prop, title }) => (
          <label key={ testeid } className={ style[type] }>
            <h3>{title}</h3>
            <input
              data-testid={ testeid }
              type={ type }
              name={ name }
              className={ type }
              value={ prop }
              onChange={ onInputChange }
            />
          </label>
        ))}
        <label className={ style.rare } htmlFor='rare-input'>
          <h3>Raridade</h3>
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label className={style.trunfo}>
          {hasTrunfo ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
            : (
              <>
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  data-testid={ hasTrunfo ? '' : 'trunfo-input' }
                  onChange={ onInputChange }
                  checked={ cardTrunfo }
                  className={ hasTrunfo ? style.dNone : style.trInput }
                />
                <span>Super Trunfo</span>
              </>)}
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
