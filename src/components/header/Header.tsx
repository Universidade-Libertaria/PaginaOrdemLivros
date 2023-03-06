import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <Image src='/Logo.png' alt='Logo' width={180} height={48} />
      </div>
    </header>
  );
}
