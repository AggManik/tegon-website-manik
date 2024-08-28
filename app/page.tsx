import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureTabs from "../components/FeatureTabs"; // Import the FeatureTabs component
import TriageSection from "../components/TriageSection";


export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <FeatureTabs /> {/* Add the FeatureTabs component here */}
      <TriageSection /> {/* Add the TriageSection component here */}
    </div>
  );
}
