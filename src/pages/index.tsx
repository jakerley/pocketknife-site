import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocketknife – Media conversion that speaks your language</title>
        <meta name="description" content="Pocketknife: Effortless media conversion for everyone. Download for Mac & Windows. Free & Pro plans. Support, refund, and cancelation policies included." />
      </Head>
      <main className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <div className={styles.logoRow}>
              <Image src="/Pocketknife_StripLogo-13.png" alt="Pocketknife Logo" width={48} height={48} className={styles.logo} />
              <span className={styles.logoTitle}>Pocketknife</span>
            </div>
            <p className={styles.tagline}>Media conversion that speaks your language.</p>
            <div className={styles.features}>
              <p>No more command line. Just say what you need —</p>
              <ul>
                <li>“compress for web without losing quality”</li>
                <li>“remove the audio”</li>
                <li>“convert to ProRes”</li>
              </ul>
              <p>Pocketknife does the rest.</p>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.aspectRatioBox + ' ' + styles.heroImageScaled}>
              <Image src="/Pocketknife_Interface.png" alt="Pocketknife App Interface" fill className={styles.heroImage} />
            </div>
          </div>
        </div>
        <div className={styles.downloadBlock}>
          <h2 className={styles.downloadTitle}>Get started for Free:</h2>
          <div className={styles.downloadButtonsCentered}>
            <a href="#" className={styles.downloadBtn} aria-label="Download for Mac">
              <span className={styles.downloadIcon}>⬇️</span> Mac
            </a>
            <a href="#" className={styles.downloadBtn} aria-label="Download for Windows">
              <span className={styles.downloadIcon}>⬇️</span> Windows
            </a>
          </div>
        </div>
        <footer className={styles.footerLinks}>
          <a href="/info#pricing">Pricing</a>
          <span>·</span>
          <a href="/info#cancelation">Cancelation</a>
          <span>·</span>
          <a href="/info#refund">Refund</a>
          <span>·</span>
          <a href="/info#contact">Contact</a>
        </footer>
      </main>
    </>
  );
} 