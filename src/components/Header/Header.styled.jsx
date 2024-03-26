import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1272px;
  }
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  padding: 15px;
  min-height: 100px;
  background-color: var(--background);
  box-shadow: var(--box-shadow);
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: var(--text-color);
  }
`;