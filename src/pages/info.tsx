import { useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Info.module.css';

const sections = [
  { id: 'pricing', label: 'Pricing' },
  { id: 'cancelation', label: 'Cancelation' },
  { id: 'refund', label: 'Refund' },
  { id: 'contact', label: 'Contact' },
];

export default function Info() {
  const refs = sections.reduce((acc, section) => {
    acc[section.id] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const scrollToSection = (id: string) => {
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.infoContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.homeLinkWrapper}>
          <Link href="/" className={styles.homeLink}>&larr; Home</Link>
        </div>
        <nav>
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <button onClick={() => scrollToSection(section.id)}>{section.label}</button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className={styles.infoContent}>
        <section ref={refs.pricing} id="pricing">
          <h2>Pricing</h2>
          <p>Pocketknife is free to use with limited daily conversions.</p>
          <p>Upgrade for unlimited usage: <strong>$5 per month</strong></p>
          <p>Upgrade anytime from within the app.</p>
        </section>
        <section ref={refs.cancelation} id="cancelation">
          <h2>Cancelation Policy</h2>
          <ul>
            <li>You may cancel your Pocketknife Pro subscription at any time.</li>
            <li>Your subscription will remain active until the end of your current billing period.</li>
            <li>After that, you’ll return to the free tier with limited daily conversions.</li>
            <li>You can re-subscribe at any time.</li>
          </ul>
          <p>To cancel: Open the Pocketknife app, go to Account or Subscription, and click Cancel Subscription.</p>
        </section>
        <section ref={refs.refund} id="refund">
          <h2>Refund Policy</h2>
          <ul>
            <li>We offer refunds within 3 days of purchase if:</li>
            <ul>
              <li>The app didn’t function as intended on your system</li>
              <li>You were charged in error</li>
              <li>We couldn’t resolve a technical issue</li>
            </ul>
            <li>Refunds are not issued for:</li>
            <ul>
              <li>Partial use of a subscription</li>
              <li>Cancelations after 3 days</li>
              <li>Inactivity or non-use</li>
            </ul>
          </ul>
          <p>To request a refund: Email <a href="mailto:support@pocketknife.media">support@pocketknife.media</a> with your subscription email, purchase date, and a brief description of the issue. We aim to respond within 3 business days.</p>
        </section>
        <section ref={refs.contact} id="contact">
          <h2>Contact & Support</h2>
          <p>For any questions, technical issues, or feedback, email us at <a href="mailto:support@pocketknife.media">support@pocketknife.media</a>.</p>
        </section>
      </main>
    </div>
  );
} 