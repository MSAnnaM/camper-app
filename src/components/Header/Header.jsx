import { FaHome } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { HeaderContainer, Nav, NavigationLink, Container, IconWrapper } from "./Header.styled";

export const Header = () => {

  return (
    <HeaderContainer>
  <Container>
    <Nav>
      <ul>
        <li>
          <NavigationLink to="/">
            <IconWrapper>
              <FaHome size={30} />
              <span>Home</span>
            </IconWrapper>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/catalog">
            <IconWrapper>
              <MdLocalOffer size={30}/>
              <span>Catalog</span>
            </IconWrapper>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink id="favs" to="/favorites">
            <IconWrapper>
              <AiOutlineHeart size={30}/>
              <span>Favorites</span>
            </IconWrapper>
          </NavigationLink>
        </li>
      </ul>
    </Nav>
  </Container>
</HeaderContainer>
  );
};