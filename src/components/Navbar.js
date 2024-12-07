import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/logo.jpeg';

const Nav = styled.nav`
  height: 80px;
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 60px;
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const GetInTouchButton = styled(Link)`
  background-color: var(--accent-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6fd6;
  }
`;

function Navbar() {
  return (
    <Nav>
      <LogoContainer to="/">
        <Logo src={logoImage} alt="Infronics Logo" />
      </LogoContainer>
      <NavItems>
        <NavLink to="/about">About Us</NavLink>
        <ExternalLink 
          href="https://www.infronics.com/node/3" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Investor Relations
        </ExternalLink>
        <NavLink to="/isms-policy">ISMS Policy</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <GetInTouchButton to="/contact">Contact Us</GetInTouchButton>
      </NavItems>
    </Nav>
  );
}

export default Navbar;
