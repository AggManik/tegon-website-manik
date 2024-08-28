import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css"; // Import the CSS module

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTop}>
        <a href="https://slack.com" className={styles.communityButton}>
          <Image src="/slack-logo.svg" alt="Slack Logo" width={24} height={24} />
          Join our Slack community
        </a>
      </div>
      <div className={styles.heroText}>
        <h1>Tegon is a dev-first issue tracking tool</h1>
        <p>Open-source, customizable, and lightweight.</p>
      </div>
      <div className={styles.cta}>
        <button className={styles.ctaButton}>Get Started for free</button>
      </div>
    </section>
  );
};

export default Hero;
