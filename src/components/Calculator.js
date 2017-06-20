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

const buttonConfig = [
  {
    key: 'C',
    action: 'clear-all'
  },
  {
    key: 'CE',
    action: 'clear'
  },
  {
    key: '∓',
    action: 'neg-pos'
  },
  {
    key: '÷',
    action: '/'
  },
  {
    key: 7,
    action: 7
  },
  {
    key: 8,
    action: 8
  },
  {
    key: 9,
    action: 9
  },
  {
    key: '*',
    action: '*'
  },
  {
    key: 4,
    action: 4
  },
  {
    key: 5,
    action: 5
  },
  {
    key: 6,
    action: 6
  },
  {
    key: '-',
    action: '-'
  },
  {
    key: 1,
    action: 1
  },
  {
    key: 2,
    action: 2
  },
  {
    key: 3,
    action: 3
  },
  {
    key: '+',
    action: '+'
  },
  {
    key: '.',
    action: '.'
  },
  {
    key: 0,
    action: 0
  },
  {
    key: '%',
    action: '%'
  },
  {
    key: '=',
    action: '='
  }
];

class Calculator extends Component {
  state = {
    equation: 0,
    value: 0
  };

  handleChange = (e) => {
    const value = e.target.value !== '' ? e.target.value : 0;

    this.setState({
      equation: value,
      value
    })
  };

  render() {
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
            onChange={this.handleChange}
          />
        </ResultContainer>
        <ButtonContainer>
          {buttonConfig.map(btn =>
            <Button key={btn.action}>
              {btn.key}
            </Button>
          )}
        </ButtonContainer>
      </Container>
    )
  }
}

export default Calculator;