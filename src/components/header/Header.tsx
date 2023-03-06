import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <Image src='/Logo.svg' alt='Logo' width={280} height={75} />
      </div>
    </header>
  );
}
