import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  width: 100%;
  max-width: 320px;
  height: 100%;
  min-height: 480px;
  color: #000;
  background-color: rgba(255,255,255,0.35);
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  order: 0;
  flex: 0 0 20%;
  align-self: stretch;
  min-height: 8em;
  padding: 1em;
  background-color: rgba(255,255,255,0.25);
`;

const Result = styled.h2`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  order: 0;
  flex: 0 0 100%;
  align-self: stretch;
  text-align: right;
  text-transform: uppercase;
`;

export const ResultEquation = Result.extend`
  color: rgba(0,0,0,0.75);
`;

const ResultFinal = Result.withComponent('input');
export const ResultInput = ResultFinal.extend`
  font-weight: inherit;
  font-family: inherit;
  font-size: 3.6rem;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
`;

export const LabelHidden = styled.label`
  display: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  order: 0;
  flex: 1 0 80%;
  align-self: stretch;
  background-color: rgba(255,255,255,0.15);
`;

export const Button = styled.button`
  display: block;
  width: 25%;
  order: 0;
  flex: 1 0 25%;
  align-self: stretch;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  color: currentColor;
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  background: transparent;
  cursor: pointer;

  :not(:nth-of-type(4n+1)) {
    border-left: 1px solid rgba(0,0,0,0.1);
  }
  :hover,
  :active {
    background: rgba(255,255,255,0.4);
    background-clip: padding-box;
  }
`;