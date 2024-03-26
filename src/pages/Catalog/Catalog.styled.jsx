import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const GoToPrevPageBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  align-self: flex-start;
`;