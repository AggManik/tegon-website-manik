"use client";
import React from "react";
import styles from "./TriageSection.module.css";

const TriageSection = () => {
  return (
    <section className={styles.triageSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src="/triage-demo.jpeg" alt="Triage Screenshot" className={styles.triageImage} />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Have omni-channel bug reporting system</h2>
          <p className={styles.subtitle}>
            Triage is your central hub to automatically create bugs from various external sources.
          </p>
          <div className={styles.channelWrapper}>
            <div className={styles.channelItem}>
              <img src="/slack-logo.svg" alt="Slack Connect" className={styles.channelIcon} />
              <span>Slack Connect</span>
            </div>
            <div className={styles.channelItem}>
              <img src="/discord-icon.svg" alt="Discord" className={styles.channelIcon} />
              <span>Discord</span>
            </div>
            <div className={styles.channelItem}>
              <img src="/email-icon.jpeg" alt="Email" className={styles.channelIcon} />
              <span>Email</span>
            </div>
            <div className={styles.channelItem}>
              <img src="/sentry-icon.svg" alt="Sentry" className={styles.channelIcon} />
              <span>Sentry</span>
            </div>
            <div className={styles.channelItem}>
              <img src="/zendesk-icon.svg" alt="Zendesk" className={styles.channelIcon} />
              <span>Zendesk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriageSection;
