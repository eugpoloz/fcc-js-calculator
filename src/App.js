import React from 'react';
import styled from 'styled-components';

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
    <Header>
      <Heading>
        JavaScript Calculator
      </Heading>
      <Subheading>
        (almost) made with <Heart>❤</Heart> by Evgenia
      </Subheading>
    </Header>
  );
}

export default App;
