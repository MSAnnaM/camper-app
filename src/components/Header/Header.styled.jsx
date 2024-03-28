import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  padding: 15px;
  min-height: 100px;
  background-color: var( --bg-color);
  box-shadow: var(--box-shadow);
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    display: none;

    @media screen and (min-width: 768px) {
      display: inline-block;
    }
  }
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
  &.active {
    svg {
      fill: var(--accent-color);
      stroke: var(--accent-color);
    }
  }
`;