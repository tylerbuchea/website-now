import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
// import 'hack';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>

        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Website Now!</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/hack/0.8.0/hack.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/hack/0.8.0/dark-grey.css"
          />
        </Head>

        <body className="hack dark-grey">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>

      </html>
    );
  }
}
