import Link from "next/link";
import styles from "./hero.module.scss";
import Image from "next/image";

export function Hero() {
  return (
    <div className={styles.wrapper}>
      <h1>Guia de Leitura por Tema</h1>
      <div className={styles.heroContainer}>
        <div className={styles.ctaContainer}>
          <div className={styles["black-line-left"]}></div>
          <p>
            ocê já se imaginou como um explorador libertário em busca do
            conhecimento mais valioso? Se sim, temos um mapa de leitura especial
            para você! Com ele, você poderá desbravar as diferentes ramificações
            da teoria libertária de forma organizada e descomplicada. Imagine
            ter acesso aos livros mais importantes para cada tema específico,
            como se fossem tesouros valiosos que você pode consultar sempre que
            surgir aquela dúvida! Não perca mais tempo procurando por
            informações soltas, deixe o nosso mapa ser o seu guia para a
            descoberta dos tesouros da teoria libertária.
          </p>
          <div className={styles["black-line-right"]}></div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/avatar.svg' alt='imagem' width={450} height={450} />
        </div>
      </div>
    </div>
  );
}
