import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
`;

const Button = styled.button`
  height: 23px;
  color: white;
  border-radius: 2px;
  padding: 2px 15px;
  margin-right: 3px;
  overflow: hidden;
  border: none;
  cursor: pointer;

  &.register {
    background: #7799cf;

    &:hover {
      background: #5c87cc;
    }
  }

  &.login {
    background: #474747;

    &:hover {
      background: #818181;
    }
  }
`;

interface Props {}

const AuthButtons: React.FC<Props> = () => {
  return (
    <Container>
      <Button className="register">임대인 회원가입</Button>
      <Button className="login">PC버전 로그인</Button>
    </Container>
  );
};

export default AuthButtons;
