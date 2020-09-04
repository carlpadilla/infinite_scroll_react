import React, { useState, useEffect } from 'react';

import './App.css';
// Components
import { Heading } from './components/Heading';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/UnsplashImage';

// Dependencies
import Axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const fetchImages = () => {
    const apiRoot = 'https://api.unsplash.com';

    Axios.get(
      `${apiRoot}/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&count=9`
    )
      .then((res) => setImage([...image, ...res.data]))
      .catch((err) => console.error(err));
  };

  return (
    <div className='App'>
      <GlobalStyle />
      <Heading />
      <InfiniteScroll
        dataLength={image.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {image.map((images) => (
            <UnsplashImage
              url={images.urls.small}
              keys={images.user.id.toString()}
              id={images.user.id}
            />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;

// styles

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: whitesmoke;
  }

  body {
    font-family: sanserif;
  }
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
