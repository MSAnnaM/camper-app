import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  text-shadow: var(--box-shadow);
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
`;

export const Texte = styled.p`
font-size: 18px;
margin-bottom: 10px;
`;

export const ImagesRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;
`;

export const Image = styled.img`
  width: calc(50% - 10px); 
`;