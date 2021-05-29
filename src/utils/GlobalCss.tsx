import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

export default function GlobalCss() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          /* outline: 1px solid red; */
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-size: 14px;
          color: #333;
          background: #fff;
          font-family: vdl-megamaru, sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        #__next {
        }
        /* AdobeFont */
        /* html {
          visibility: hidden;
          opacity: 0;
          transition: opacity 1s ease;
        }
        html.wf-active {
          visibility: visible;
          opacity: 1;
        } */
        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  );
}
