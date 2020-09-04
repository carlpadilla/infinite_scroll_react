import React from 'react';
import styled from 'styled-components';

export const UnsplashImage = ({ url, keys, id }) => {
  console.log('key', keys);
  return <Img src={url} key={keys} alt='' />;
};

//Styles
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(30px 10px 4px #4444dd);
`;
