import React from 'react';
import styled from 'styled-components';
import useMedia from '../../libs/hooks/useMedia';
import { media } from '../../styles';

// Styles
const Container = styled.div`
  position: fixed;
  width: 88px;
  height: 88px;
  right: 7px;
  top: 250px;
  color: #fff;
  z-index: 1000;

  ${media.tablet} {
    display: none;
  }

  img {
    border: 0;
  }
`;

const Button = styled.a`
  margin-top: -5px;
  display: block;
`;

const MobileContainer = styled.div`
  z-index: 999999999999;
  display: block;
  position: fixed;
  max-width: 70px;
  max-height: 70px;
  right: 15px;
  bottom: 15px;
  color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  border-radius: 50em;
  z-index: 1000;

  img {
    border: 0;
    width: 100%;
  }
`;

interface Props {}

const FloatMenu: React.FC<Props> = () => {
  const isSmall = useMedia(`(max-width: 1333px)`);

  return isSmall ? (
    <MobileContainer>
      <a href="https://pf.kakao.com/_Nsksj/chat" target="_blank">
        <img src="/images/m_katalk2.png" alt="" />
      </a>
    </MobileContainer>
  ) : (
    <Container>
      <a href="/zipsaPay" target="_blank">
        <img src="/images/quick_img04.jpg" alt="" />
      </a>
      <a href="https://pf.kakao.com/_Nsksj/chat" target="_blank">
        <img src="/images/quick_img02.jpg" alt="" />
      </a>
      <Button>
        <img src="/images/quick_top.jpg" alt="" />
      </Button>
    </Container>
  );
};

export default FloatMenu;
