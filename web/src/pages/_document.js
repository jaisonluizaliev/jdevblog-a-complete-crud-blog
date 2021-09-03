import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }   
    //updated
    //const sheet = new ServerStyleSheet()
    const sheet = new ServerStyleSheet();

    const page = await renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };

  }

  render() {
    return (
      <Html lang="PT-BR">
        <Head>
          {this.props.styleTags}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;700&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
