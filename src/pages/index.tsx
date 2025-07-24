import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const DownloadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="4" y="17" width="14" height="2" rx="1" fill="currentColor"/>
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocketknife – Media conversion that speaks your language</title>
        <meta name="description" content="Pocketknife: Effortless media conversion for everyone. Download for Mac & Windows. Free & Pro plans. Support, refund, and cancelation policies included." />
      </Head>
      {/* Header Bar */}
      <header className={styles.headerBar}>
        <div className={styles.headerLeft}>
          <Image src="/Pocketknife_StripLogo-13.png" alt="Pocketknife Logo" width={40} height={40} className={styles.headerLogo} />
          <span className={styles.headerTitle}>Pocketknife</span>
        </div>
        <div className={styles.headerRight}>
          <a href="https://github.com/jakerley/pocketknife-releases/releases/download/v0.2.2/Pocketknife-0.2.2-universal.dmg" className={styles.downloadBtn} aria-label="Download for Mac">
            <span className={styles.downloadIcon}><DownloadIcon /></span> Mac
          </a>
          <a href="https://github.com/jakerley/pocketknife-releases/releases/download/v0.2.2/Pocketknife-Setup-0.2.2.exe" className={styles.downloadBtn} aria-label="Download for Windows">
            <span className={styles.downloadIcon}><DownloadIcon /></span> Windows
          </a>
        </div>
      </header>
      <main className={styles.heroContainer}>
        <div className={styles.heroSingleCol}>
          <h1 className={styles.heroHeadline}>Media conversion that speaks your language.</h1>
          <div className={styles.heroImageWrapper}>
            <div className={styles.aspectRatioBox + ' ' + styles.heroImageScaled}>
              <Image src="/Pocketknife_Interface.png" alt="Pocketknife App Interface" fill style={{ objectFit: 'contain', borderRadius: '18px' }} />
            </div>
          </div>
          <p className={styles.heroSubtext}>Just say what you need, Pocketknife will do the rest.</p>
        </div>
      </main>
      <footer className={styles.siteFooter}>
        <div className={styles.footerLinks}>
          <a href="/info#pricing">Pricing</a>
          <span>·</span>
          <a href="/info#cancelation">Cancelation</a>
          <span>·</span>
          <a href="/info#refund">Refund</a>
          <span>·</span>
          <a href="/info#contact">Contact</a>
        </div>
      </footer>
    </>
  );
} 