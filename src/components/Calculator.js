import React, { Component } from "react";
import math from "mathjs";
import ErrorPopup from "./ErrorPopup";
import {
  Container,
  ResultContainer,
  ResultEquation,
  ResultInput,
  ButtonContainer,
  Button,
  LabelHidden
} from "./StyledCalculator";

class Calculator extends Component {
  state = {
    equation: "",
    isResult: false,
    isError: false,
    previousOperation: "+",
    errorText: ""
  };

  clearAll = e => {
    this.input.value = "0";
    this.setState({
      equation: "",
      isResult: false
    });
  };

  clearEntry = e => {
    this.input.value = "0";
  };

  signValue = () => {
    this.input.value = (this.input.value *= -1);
  };

  addToEquation = key => {
    let keyValue = `${this.input.value}${key ? key : ""}`;
    let equation = this.state.equation + keyValue;

    if (this.state.isResult) {
      equation = keyValue;
    }

    this.setState(
      { equation, isResult: false, previousOperation: key },
      () => this.input.value = "0"
    );
  };

  updateInputWithKey = key => {
    this.clearResult(key);

    if (this.input.value === "0") return (this.input.value = key);
    return (this.input.value += key);
  };

  // updateValue = e => {
  //   this.clearResult(e.key);

  //   const key = e.keyCode;

  //   if ((!e.shiftKey && key === 187) || key === 13) {
  //     return this.returnResult();
  //   }

  //   if (e.target.tagName.toLowerCase() === "input") {
  //     return;
  //   }

  //   if ((key > 47 && key < 58) || key === 190) {
  //     return this.updateInputWithKey(e.key);
  //   } else if (
  //     key === 189 ||
  //     (!e.shiftKey && key === 191) ||
  //     (e.shiftKey && key === 56) ||
  //     (e.shiftKey && key === 187)
  //   ) {
  //     return this.updateInputWithKey(e.key);
  //   } else if (key === 67) {
  //     return this.clearAll(e);
  //   }
  // };

  returnResult = () => {
    function evalResult() {
      try {
        this.input.value = math.eval(this.state.equation);
      } catch (e) {
        this.setState({
          isError: true,
          errorText: "Your input is invalid! Please provide a correct math expression and try again."
        });
      }
    }

    let equation = this.state.equation + `${this.input.value}`,
      lastChar = parseFloat(
        this.state.equation.substr(this.state.equation.length - 1)
      );

    if (!isNaN(lastChar)) {
      equation = this.state.equation +
        `${this.state.previousOperation}${this.input.value}`;
    }

    this.setState(
      {
        equation,
        isResult: true
      },
      evalResult
    );
  };

  clearResult = key => {
    if (this.state.isResult) {
      return this.setState(
        {
          equation: "",
          isResult: false,
          isError: false,
          errorText: ""
        },
        () => this.input.value = key ? key : "0"
      );
    }
  };

  // componentDidMount() {
  //   window.addEventListener("keydown", this.updateValue);
  // }

  render() {
    const buttonConfig = [
      {
        key: "C",
        action: this.clearAll
      },
      {
        key: "CE",
        action: this.clearEntry
      },
      {
        key: "∓",
        action: this.signValue
      },
      {
        key: "÷",
        action: () => this.addToEquation("/")
      },
      {
        key: 7,
        action: () => this.updateInputWithKey(7)
      },
      {
        key: 8,
        action: () => this.updateInputWithKey(8)
      },
      {
        key: 9,
        action: () => this.updateInputWithKey(9)
      },
      {
        key: "*",
        action: () => this.addToEquation("*")
      },
      {
        key: 4,
        action: () => this.updateInputWithKey(4)
      },
      {
        key: 5,
        action: () => this.updateInputWithKey(5)
      },
      {
        key: 6,
        action: () => this.updateInputWithKey(6)
      },
      {
        key: "-",
        action: () => this.addToEquation("-")
      },
      {
        key: 1,
        action: () => this.updateInputWithKey(1)
      },
      {
        key: 2,
        action: () => this.updateInputWithKey(2)
      },
      {
        key: 3,
        action: () => this.updateInputWithKey(3)
      },
      {
        key: "+",
        action: () => this.addToEquation("+")
      },
      {
        key: ".",
        action: () => this.updateInputWithKey(".")
      },
      {
        key: 0,
        action: () => this.updateInputWithKey(0)
      },
      {
        key: "=",
        flex: 2,
        action: this.returnResult
      }
    ];

    return (
      <Container>
        <ResultContainer>
          <ResultEquation>
            {this.state.equation.trim()}
            {this.state.isResult && " ="}
          </ResultEquation>
          <LabelHidden>Final Result</LabelHidden>
          <ResultInput
            type="text"
            name="result"
            defaultValue="0"
            innerRef={input => this.input = input}
          />
        </ResultContainer>
        <ButtonContainer>
          {buttonConfig.map(btn => (
            <Button
              key={btn.key}
              onClick={btn.action ? btn.action : false}
              flex={btn.flex}
            >
              {btn.key}
            </Button>
          ))}
        </ButtonContainer>

        {this.state.isError &&
          <ErrorPopup onClick={() => this.clearResult("0")}>
            {this.state.errorText}
          </ErrorPopup>}
      </Container>
    );
  }
}

export default Calculator;
