import React from 'react';
import styled from 'styled-components';
import AuthButtons from './AuthButtons';
import NavItem from './NavItem';
import SocialLink from './SocialLink';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 48px 0 0 15px;
  padding-left: 48px;
  font-size: 16px;
  font-weight: bold;
`;

interface Props {}

const NavList: React.FC<Props> = () => {
  return (
    <Container>
      <NavItem name="About 집사" url="/" />
      <NavItem
        name="임대인용"
        url="/"
        sub={[
          {
            name: '앱 서비스소개',
            url: '/',
          },
          {
            name: 'PC 프로그램 소개',
            url: '/',
          },
          {
            name: 'FAQ',
            url: '/',
          },
        ]}
      />
      <NavItem
        name="세입자용"
        url="/"
        sub={[
          {
            name: '앱 서비스소개',
            url: '/',
          },
          {
            name: 'FAQ',
            url: '/',
          },
        ]}
      />
      <NavItem
        name="중개사용"
        url="/"
        sub={[
          {
            name: '앱 서비스소개',
            url: '/',
          },
          {
            name: 'FAQ',
            url: '/',
          },
        ]}
      />
      <NavItem name="집사페이" url="/" />
      <NavItem
        name="고객지원"
        url="/"
        sub={[
          {
            name: '공지사항/이벤트',
            url: '/',
          },
          {
            name: '자주묻는질문',
            url: '/',
          },
        ]}
      />
      <SocialLink />
      <AuthButtons />
    </Container>
  );
};

export default NavList;
