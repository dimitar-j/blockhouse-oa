import React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
function NavBar() {
  return (
    <nav className={styles.container}>
      <Image
        src="/favicon.ico"
        width={40}
        height={40}
        alt="Blockhouse logo"
        className={styles.logo}
      />
      <a
        href="https://blockhouse.app"
        className={styles.title}
        target="__blank"
      >
        Blockhouse
      </a>
    </nav>
  );
}

export default NavBar;
