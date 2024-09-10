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
      <div>Blockhouse</div>
    </nav>
  );
}

export default NavBar;
