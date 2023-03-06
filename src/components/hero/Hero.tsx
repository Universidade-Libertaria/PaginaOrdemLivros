import Link from "next/link";
import styles from "./hero.module.scss";
import Image from "next/image";

export function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ctaContainer}>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quos optio aut praesentium id tempore temporibus doloremque porro
          dolorem eveniet.
        </h2>
        <Link href={""}>Lorem ipsum dolor sit.</Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/avatar.svg' alt='imagem' width={450} height={450} />
      </div>
    </div>
  );
}
