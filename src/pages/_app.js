import GlobalCss from '../utils/GlobalCss'
import { adobeLoader } from '../utils/adobeLoader'
import { useEffect } from 'react'
import 'regenerator-runtime/runtime.js'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) adobeLoader(document)
  }, [])
  return (
    <>
      <GlobalCss />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
