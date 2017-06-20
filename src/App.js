import React from 'react';
import styled from 'styled-components';

import Calculator from './components/Calculator';

const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Header = styled.header`
  margin-bottom: 2em;
  line-height: 1.5;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 4rem;
`;

const Subheading = styled.p`
  font-size: inherit;
`;

const Heart = styled.span`
  color: rgba(204,0,24,0.8);
`;

function App(props)  {
  return (
    <Container>
      <Header>
        <Heading>
          JavaScript Calculator
        </Heading>
        <Subheading>
          (almost) made with <Heart>❤</Heart> by Evgenia
        </Subheading>
      </Header>
      <Calculator />
    </Container>
  );
}

export default App;