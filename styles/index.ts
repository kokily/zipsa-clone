import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    width: 100%;
    letter-spacing: -0.5px;
    font-family: "Nanum Barun Gothic", 나눔고딕, NanumGothic, "Malgun Gothic", 돋움, Dotum, AppleGothic, sans-serif !important;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const mediaQuery = (max_width: number) => `
  @media (max-width: ${max_width}px)
`;

export const media = {
  tablet: mediaQuery(1333),
  phone: mediaQuery(1033),
};
