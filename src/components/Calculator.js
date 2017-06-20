import React, { Component } from 'react';
import {
  Container,
  ResultContainer,
  ResultEquation,
  ResultInput,
  ButtonContainer,
  Button,
  LabelHidden
} from './StyledCalculator';

class Calculator extends Component {
  state = {
    equation: 0,
    value: 0
  };

  updateInput = (e) => {
    let value;

    if (e.target.value) {
      value = e.target.value;
    } else if (e.key) {
      value = '' + this.state.value + e.key;
    }

    this.setState({
      value: isNaN(+value) ? 0 : +value
    })
  };

  clearAll = (e) => {
    this.setState({
      equation: 0,
      value: 0
    })
  };

  clearEntry = (e) => {
    this.setState({
      value: 0
    })
  };

  updateValue = (e) => {
    if (e.keyCode > 47 && e.keyCode < 58) {
      this.updateInput(e);
    }
    if (e.keyCode === 67) {
      this.clearAll(e);
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.updateValue);
  }

  render() {
    const buttonConfig = [
      {
        key: 'C',
        action: this.clearAll
      },
      {
        key: 'CE',
        action: this.clearEntry
      },
      {
        key: '∓',
        // action: 'neg-pos'
      },
      {
        key: '÷',
        // action: '/'
      },
      {
        key: 7,
        // action: 7
      },
      {
        key: 8,
        // action: 8
      },
      {
        key: 9,
        // action: 9
      },
      {
        key: '*',
        // action: '*'
      },
      {
        key: 4,
        // action: 4
      },
      {
        key: 5,
        // action: 5
      },
      {
        key: 6,
        // action: 6
      },
      {
        key: '-',
        // action: '-'
      },
      {
        key: 1,
        // action: 1
      },
      {
        key: 2,
        // action: 2
      },
      {
        key: 3,
        // action: 3
      },
      {
        key: '+',
        // action: '+'
      },
      {
        key: '.',
        // action: '.'
      },
      {
        key: 0,
        // action: 0
      },
      {
        key: '%',
        // action: '%'
      },
      {
        key: '=',
        // action: '='
      }
    ];

    return (
      <Container>
        <ResultContainer>
          <ResultEquation>
            {this.state.equation}
          </ResultEquation>
          <LabelHidden>Final Result</LabelHidden>
          <ResultInput
            name="result"
            value={this.state.value}
            onChange={this.updateInput}
          />
        </ResultContainer>
        <ButtonContainer>
          {buttonConfig.map(btn =>
            <Button key={btn.key} onClick={btn.action ? btn.action : false}>
              {btn.key}
            </Button>
          )}
        </ButtonContainer>
      </Container>
    )
  }
}

export default Calculator;