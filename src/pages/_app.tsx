// import 'ress';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import GlobalCss from '../utils/GlobalCss';
import { adobeLoader } from '../utils/adobeLoader';
import 'regenerator-runtime/runtime.js';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="ja" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="スタジオスプーン" />
        <title>だーれだ動物園</title>
        <meta name="description" content="だーれだ動物園" />
        <meta name="keywords" content="だーれだ, 動物園, animal" />
        <link rel="canonical" href="https://okina-pj.com/" />
        <link
          rel="shortcut icon"
          href="/images/common/favicon.png"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/images/common/favicon.png" />
        <meta property="og:site_name" content="だーれだ動物園" />
        <meta property="og:title" content="だーれだ動物園" />
        <meta
          property="og:image"
          content="https://okina-pj.com/assets/images/ogimg.jpg"
        />
        <meta property="og:description" content="だーれだ動物園" />
        <meta property="og:url" content="https://okina-pj.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="OkinaProject" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FH2PEQRJ0V"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FH2PEQRJ0V');`,
          }}
        ></script>
      </Head>
      <GlobalCss />
      <Component {...pageProps} />
    </>
  );
};
export default App;
