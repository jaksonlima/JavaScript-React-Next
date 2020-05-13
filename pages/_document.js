import Document, { Head, Main, NextScript } from "next/document";

export default class DocumentNext extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`body {background: #069}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
