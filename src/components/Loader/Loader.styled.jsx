import styled, { keyframes } from 'styled-components';


const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export const LoaderSpinner = styled.div`
  border: 8px solid #475467;
  border-top: 8px solid #FFC531;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
