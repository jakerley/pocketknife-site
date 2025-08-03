import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Join the Pocketknife Beta</title>
      </Head>
      <Script async src="https://tally.so/widgets/embed.js" />
      <style jsx global>{`
        html { 
          margin: 0; 
          height: 100%; 
          overflow: hidden; 
        }
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }
        iframe { 
          position: absolute; 
          top: 0; 
          right: 0; 
          bottom: 0; 
          left: 0; 
          border: 0; 
        }
      `}</style>
      <iframe 
        data-tally-src="https://tally.so/r/woj9JN?transparentBackground=1" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0} 
        title="Join the Pocketknife Beta"
      />
    </>
  );
} 