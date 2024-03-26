import React from 'react';
import { LoaderContainer, LoaderSpinner, Overlay } from './Loader.styled.jsx';

export const Loader = () => {
  return (
    <Overlay>
    <LoaderContainer>
      <LoaderSpinner />
      </LoaderContainer>
      </Overlay>
  );
}
