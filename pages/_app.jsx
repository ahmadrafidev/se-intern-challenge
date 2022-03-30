import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Head>
          <link rel="cards icon" href="/images/cards.png" />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="description"
            content="basic crud app"
          />
          <html lang="en" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
