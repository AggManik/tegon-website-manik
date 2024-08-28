import React from "react";
import Image from "next/image";
import styles from "./Header.module.css"; // Import the CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/tegon_logo.png" alt="Tegon Logo" width={30} height={30} />
        <span>Tegon</span>
      </div>
      <nav className={styles.navigation}>
        <a href="https://docs.tegon.ai/introduction">Docs</a>
        <a href="#">Blogs</a>
        <a href="https://github.com/tegonhq/tegon/releases">Releases</a>
        <a href="https://github.com/tegonhq/tegon">Github</a>
      </nav>
      <div className={styles.signIn}>
        <button>Get Started for free</button>
      </div>
    </header>
  );
};

export default Header;
