import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';

// Styles
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
`;

const Logo = styled.div`
  display: flex;
  margin: 48px 0 0 15px;

  a {
    color: #2e3444;
    font-size: 25px;
    font-weight: bold;
  }

  img {
    position: relative;
    width: 100px;
    border: 0;
  }
`;

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Layout>
        <Logo>
          <a href="/">
            <img src="/images/zipsa_logo.png" alt="Menu" />
          </a>
        </Logo>

        <NavList />
      </Layout>
    </Container>
  );
};

export default Header;
