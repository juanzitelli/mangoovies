import React from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo';
import { Link } from 'react-router-dom';
interface Props {}

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const LogoContainer = styled.span`
  padding-left: 5vw;
`;

const Navbar = (props: Props) => {
  return (
    <StyledNavbar>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
    </StyledNavbar>
  );
};

export default Navbar;
