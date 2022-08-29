import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <NavStyled>
        <UlStyled>
          <LiStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </LiStyled>
          <NavLinkStyled to="movies">Movies</NavLinkStyled>
        </UlStyled>
      </NavStyled>
      <Outlet />
    </>
  );
};

export default Layout;

export const NavStyled = styled.nav`
  border-bottom: black 5px solid;
`;

export const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 20px;
  margin-left: 20px;
`;

export const LiStyled = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  padding: 2px;
  color: ${p => p.theme.colors.dark};
  font-size: ${p => p.theme.fontSizes.large};
  border-radius: ${p => p.theme.spacing(1)};
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.light};
  }
`;
