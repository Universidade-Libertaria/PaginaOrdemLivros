import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./cta.module.scss";

export default function CTA() {
  const [text] = useTypewriter({
    words: [
      "SELECIONE UMA CATEGORIA ABAIXO",
      "TENHA TODOS OS LIVROS NA ORDEM CERTA",
      "E APROVEITE A PROMOÇÃO DO COMBO!",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className={styles.wrapper}>
      <h2>{text}</h2>
      <span>
        <Cursor cursorColor='black' />
      </span>
    </div>
  );
}
