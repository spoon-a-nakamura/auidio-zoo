import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import GlobalCss from '../utils/GlobalCss';
import 'regenerator-runtime/runtime.js';
import { adobeLoader } from '../utils/adobeLoader';

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
        <meta name="author" content="STUDIO SPOON" />
        <title>ANIMAL FACE</title>
        <meta name="description" content="ANIMAL FACE" />
        <meta name="keywords" content="だーれだ, 動物園, animal" />
        <link rel="canonical" href="https://auidio-zoo.vercel.app/" />
        <link
          rel="shortcut icon"
          href="/images/common/favicon.png"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/images/common/favicon.png" />
        <meta property="og:site_name" content="ANIMAL FACE" />
        <meta property="og:title" content="ANIMAL FACE" />
        <meta
          property="og:image"
          content="https://auidio-zoo.vercel.app/images/common/ogimg.jpg"
        />
        <meta property="og:description" content="ANIMAL FACE" />
        <meta property="og:url" content="https://auidio-zoo.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="studio_spoon" />
        {/* <script
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
        ></script> */}
      </Head>
      <GlobalCss />
      <Component {...pageProps} />
    </>
  );
};
export default App;
