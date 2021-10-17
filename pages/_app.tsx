import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>마이집사-무료 임대관리 솔루션</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
