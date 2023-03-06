import Link from "next/link";
import { useState } from "react";
import styles from "./card.module.scss";
import { motion } from "framer-motion";

type Card = {
  title: string;
  image: string;
  categories: string[];
  order: { [category: string]: number };
  href: string;
};

const arrayCards: Card[] = [
  {
    title: "Homem Economia e Estado com Poder e Mercado | Murray N. Rothbard",
    image: "/filosofia.png",
    categories: ["Economia", "TeoriaJurídica", "Agorismo", "Política"],
    order: { Política: 1, Economia: 1, TeoriaJurídica: 5, Agorismo: 3 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=9777",
  },
  {
    title: "O Mito da Defesa Nacional | Hans Hermann Hoppe",
    image: "/economia.png",
    categories: ["TeoriaJurídica", "Política"],
    order: { Política: 2, TeoriaJurídica: 1 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=7900",
  },
  {
    title: "O Estado | Franz Oppenheimer",
    image: "/filosofia.png",
    categories: ["Economia", "TeoriaJurídica", "História", "Política"],
    order: { Política: 3, Economia: 6, TeoriaJurídica: 4, História: 2 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=19124",
  },
  {
    title: "Sistemas Legais Muito Diferentes Do Nosso | David Friedman",
    image: "/etica.png",
    categories: ["TeoriaJurídica", "Política", "História", "Economia"],
    order: { Política: 4, TeoriaJurídica: 2, História: 1, Economia: 7 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=19432",
  },
  {
    title: "Keynes: o Homem",
    image: "/filosofia.png",
    categories: ["História"],
    order: { História: 7 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=18932",
  },
  {
    title: "Mises: Acadêmico, Criador e Herói",
    image: "/economia.png",
    categories: ["História", "Economia"],
    order: { História: 8, Economia: 5 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=18926",
  },
  {
    title:
      "Contraeconomia: Fugindo das Garras Tecnocráticas do Estado | Broze e Konkin",
    image: "/filosofia.png",
    categories: ["História", "Agorismo", "Política"],
    order: { Política: 5, História: 3, Agorismo: 1 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=18087",
  },
  {
    title: "O Socialismo | Ludwig von Mises",
    image: "/filosofia.png",
    categories: ["Economia", "Política"],
    order: { Política: 6, Economia: 2 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=7593",
  },
  {
    title: "A Política e a Fé Cristã | Lucas Rosalem",
    image: "/filosofia.png",
    categories: ["História", "Política", "TeoriaJurídica"],
    order: { Política: 7, História: 4, TeoriaJurídica: 7 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=17922",
  },
  {
    title: "A Traição da Direita Americana | Murray Rothbard",
    image: "/filosofia.png",
    categories: ["História", "Política"],
    order: { Política: 8, História: 9 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=16052",
  },
  {
    title: "O Alvorecer da Liberdade – O que é Liberdade?",
    image: "/filosofia.png",
    categories: ["Economia", "Política", "TeoriaJurídica"],
    order: { Política: 9, Economia: 4, TeoriaJurídica: 3 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=13866",
  },
  {
    title: "Bastiat, Ainda Invicto | Frédéric Bastiat",
    image: "/filosofia.png",
    categories: ["História", "Política"],
    order: { Política: 10, História: 5 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=7931",
  },
  {
    title: "Revolução Satoshi | Wendy McElroy",
    image: "/filosofia.png",
    categories: ["Agorismo", "Política"],
    order: { Política: 11, Agorismo: 2 },
    href: "https://universidadelibertaria.com.br/loja/page/2/?add-to-cart=10685 ",
  },
  {
    title: "Pelo Fim do Banco Central | Rothbard",
    image: "/filosofia.png",
    categories: ["Economia", "Política", "TeoriaJurídica", "História"],
    order: { Política: 12, Economia: 3, TeoriaJurídica: 6, História: 6 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=17489",
  },
];

export function Card() {
  const [selectedCategory, setSelectedCategory] = useState("Política");

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const filteredCards = arrayCards
    .filter((card) => card.categories.includes(selectedCategory))
    .sort((a, b) => a.order[selectedCategory] - b.order[selectedCategory]);

  return (
    <div className={styles.wrapper}>
      <h3>CATEGORIAS</h3>
      <div className={styles.categoriesContainer}>
        <nav>
          <ul>
            <li
              className={selectedCategory === "Política" ? styles.active : ""}
              onClick={() => handleCategoryChange("Política")}
            >
              Política
            </li>
            <li
              className={selectedCategory === "Economia" ? styles.active : ""}
              onClick={() => handleCategoryChange("Economia")}
            >
              Economia
            </li>
            <li
              className={
                selectedCategory === "TeoriaJurídica" ? styles.active : ""
              }
              onClick={() => handleCategoryChange("TeoriaJurídica")}
            >
              Teoria Jurídica
            </li>
            <li
              className={selectedCategory === "História" ? styles.active : ""}
              onClick={() => handleCategoryChange("História")}
            >
              História
            </li>
            <li
              className={selectedCategory === "Agorismo" ? styles.active : ""}
              onClick={() => handleCategoryChange("Agorismo")}
            >
              Agorismo
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.cardsContainer}>
        {filteredCards.map((card) => (
          <motion.div
            className={styles.card}
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div key={card.title}>
              <h4>
                {card.order[selectedCategory]} - {card.title}
              </h4>
              <img src={card.image} alt={card.title} />
            </div>
            <Link href={card.href} target='_blank'>
              Compre Agora!
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
