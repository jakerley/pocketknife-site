import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/Home.module.css';
import '../styles/Info.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
} 