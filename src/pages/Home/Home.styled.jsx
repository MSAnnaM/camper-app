import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(228, 72, 72, 0.5);
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
`;

export const Texte = styled.p`
font-size: 12px;
margin-bottom: 10px;
`;

export const ImagesRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Image = styled.img`
  width: calc(25% - 10px); 
`;