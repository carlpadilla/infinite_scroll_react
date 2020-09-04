import React from 'react';
import styled from 'styled-components';

// Styles
const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  margin-bottom: 1em;
`;

export const Heading = () => {
  return (
    <Header>
      <H1>Infinite Scroll React Project</H1>
    </Header>
  );
};
