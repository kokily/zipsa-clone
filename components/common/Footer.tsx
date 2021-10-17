import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  background: #262c3a;
`;

const Policy = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 650px;
  margin-top: 1.5rem;

  a {
    margin-right: 2rem;
    color: #a5aab8;
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 1.2rem;
  padding: 4px 0;
  font-size: 13px;
  color: #707582;
`;

const Info = styled.div`
  margin-top: 10px;
  padding: 10px;
  font-size: 13px;
  color: #8f97a1;
  border-radius: 2px;
  border: 1px dashed #4d5569;

  .bar {
    color: rgba(255, 255, 255, 0.2);
    margin: 0 3px;
  }

  select {
    text-transform: none;
  }
`;

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <Policy>
        <a href="/">
          이용약관<small>(임대인용)</small>
        </a>
        <a href="/">
          이용약관<small>(세입자용)</small>
        </a>
        <a href="/">
          이용약관<small>(중개인용)</small>
        </a>
        <a href="/">개인정보 취급방침</a>
      </Policy>

      <Copyright>
        Copyright 2016 ZIPSA Inc., All rights reserved.{' '}
        <span>Inspired by Charlie C.</span>
      </Copyright>

      <Info>
        <span>
          서울시 구로구 디지털로26길 612 에이스하이엔드타워2차 1801호 (주)집사
        </span>
        <span>대표자 : 이승권</span>
        <span className="bar">|</span>
        <span>사업자 등록번호 : 856-88-00319</span>
        <span className="bar">|</span>
        <select>
          <option>Family Site</option>
          <option value="http://payapp.kr/new_home/index.html">페이앱</option>
          <option value="http://blogpay.co.kr">블로그페이</option>
          <option value="https://udpay.co.kr">유디페이</option>
          <option value="https://www.bootpay.co.kr">부트페이</option>
          <option value="https://make.link">메이크링크</option>
          <option value="https://prosell.co.kr">프로셀</option>
          <option value="https://www.ciderpay.com">사이다페이</option>
          <option value="https://danbipay.com/main">단비페이</option>
        </select>
      </Info>
    </Container>
  );
};

export default Footer;
