import { GlobalStyle } from '../styles/styles'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>

        <title>J'Dev Blog</title>

      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp