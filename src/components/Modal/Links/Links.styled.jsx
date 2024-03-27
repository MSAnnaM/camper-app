import styled from "styled-components";

export const LinksWrap = styled.div`
  hr {
    opacity: 0.3;
    background-color: var(--border-color);
  }
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  li button {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--main-text);
    transition: color var(--linear-transition);

    @media screen and (min-width: 1440px) {
      &:hover,
      &:focus {
        color: var(--accent-color);
      }
    }

    &.active::after {
      position: absolute;
      top: 30.5px;
      display: block;
      content: "";
      width: 100%;
      height: 3px;
      background-color: var(--accent-color);
    }
  }
`;

export const Render = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;