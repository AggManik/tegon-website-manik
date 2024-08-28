"use client"; // Add this line at the top
import React, { useState } from "react";
import styles from "./FeatureTabs.module.css";

const features = [
  {
    id: "tracker",
    label: "Tracker",
    imageSrc: "/tracker.jpeg",
    iconSrc: "/tracker-icon.svg", // Path to the tracker icon
  },
  {
    id: "triage",
    label: "Triage",
    imageSrc: "/triage-demo.jpeg",
    iconSrc: "/triage-icon.svg", // Path to the triage icon
  },
  {
    id: "actions",
    label: "Actions",
    imageSrc: "/actions.png",
    iconSrc: "/actions-icon.svg", // Path to the actions icon
  },
  {
    id: "ai",
    label: "AI",
    imageSrc: "/ai.png",
    iconSrc: "/ai-icon.svg", // Path to the AI icon
  },
];

const FeatureTabs = () => {
  const [selectedTab, setSelectedTab] = useState(features[0].id);

  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  const currentFeature = features.find((feature) => feature.id === selectedTab);

  return (
    <section className={styles.featureTabs}>
      <div className={styles.tabs}>
        {features.map((feature) => (
          <button
            key={feature.id}
            className={`${styles.tabButton} ${
              selectedTab === feature.id ? styles.active : ""
            }`}
            onClick={() => handleTabClick(feature.id)}
          >
            <img
              src={feature.iconSrc}
              alt={`${feature.label} Icon`}
              className={styles.icon}
            />
            {feature.label}
          </button>
        ))}
      </div>
      <div className={styles.imageContainer}>
        {currentFeature && (
          <img
            src={currentFeature.imageSrc}
            alt={currentFeature.label}
            className={styles.featureImage}
          />
        )}
      </div>
    </section>
  );
};

export default FeatureTabs;
