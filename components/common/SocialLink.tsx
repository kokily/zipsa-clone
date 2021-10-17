import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  width: 140px;
  margin-right: 0;
  padding-right: 0;

  .blog {
    background: #59c22a;

    &:hover {
      background: #93bd80;
    }
  }

  .facebook {
    background: #3e5993;

    &:hover {
      background: #6c8aca;
    }
  }

  div {
    width: 35px;
    height: 25px;
    text-align: center;
    margin-right: 5px;
    border-radius: 2px;
    padding: 5px 0 21px 0;
    margin-top: 10px;
    transition: background 0.3s;
    -webkit-transition: background 0.3s;
  }

  a {
    img {
      width: auto;
      height: 12px;
    }
  }
`;

interface Props {}

const SocialLink: React.FC<Props> = () => {
  return (
    <Container>
      <div className="blog">
        <a href="http://blog.naver.com/myzipsa" target="_blank">
          <img src="/images/blog.png" alt="" />
        </a>
      </div>
      <div className="facebook">
        <a href="https://www.facebook.com/myzipsa.co.kr" target="_blank">
          <img src="/images/facebook.png" alt="" />
        </a>
      </div>
    </Container>
  );
};

export default SocialLink;
