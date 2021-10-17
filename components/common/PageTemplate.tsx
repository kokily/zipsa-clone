import React from 'react';
import styled from 'styled-components';
import FloatMenu from './FloatMenu';
import Footer from './Footer';
import Header from './Header';

// Styles
const Container = styled.div`
  top: 0px;
  position: relative;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  background: #2e3444;
  height: 100%;
`;

interface Props {}

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <FloatMenu />

      <Header />
      <Main>{children}</Main>

      <Footer />
    </Container>
  );
};

export default PageTemplate;
