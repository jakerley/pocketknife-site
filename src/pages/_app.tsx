import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/Home.module.css';
import '../styles/Info.module.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 