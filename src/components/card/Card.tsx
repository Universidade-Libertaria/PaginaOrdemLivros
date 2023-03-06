import Link from "next/link";
import { useState } from "react";
import styles from "./card.module.scss";

type Card = {
  title: string;
  image: string;
  categories: string[];
  order: { [category: string]: number };
};

const arrayCards: Card[] = [
  {
    title: "Introdução à filosofia",
    image: "/filosofia.png",
    categories: ["filosofia"],
    order: { filosofia: 1 },
  },
  {
    title: "A mão invisível do mercado",
    image: "/economia.png",
    categories: ["economia"],
    order: { economia: 1 },
  },
  {
    title: "A ética protestante e o espírito do capitalismo",
    image: "/etica.png",
    categories: ["ética", "economia"],
    order: { ética: 1, economia: 2 },
  },
  {
    title: "Crítica da razão pura",
    image: "/filosofia.png",
    categories: ["filosofia"],
    order: { filosofia: 2 },
  },
  {
    title: "A riqueza das nações",
    image: "/economia.png",
    categories: ["economia"],
    order: { economia: 3 },
  },
  {
    title: "Diálogos",
    image: "/filosofia.png",
    categories: ["filosofia"],
    order: { filosofia: 4 },
  },
  {
    title: "A teoria dos sentimentos morais",
    image: "/filosofia.png",
    categories: ["filosofia", "ética"],
    order: { filosofia: 3, ética: 2 },
  },
];

export function Card() {
  const [selectedCategory, setSelectedCategory] = useState("filosofia");

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const filteredCards = arrayCards
    .filter((card) => card.categories.includes(selectedCategory))
    .sort((a, b) => a.order[selectedCategory] - b.order[selectedCategory]);

  return (
    <div className={styles.wrapper}>
      <h3>Categorias</h3>
      <div className={styles.categoriesContainer}>
        <nav>
          <ul>
            <li
              className={selectedCategory === "filosofia" ? styles.active : ""}
              onClick={() => handleCategoryChange("filosofia")}
            >
              Filosofia
            </li>
            <li
              className={selectedCategory === "economia" ? styles.active : ""}
              onClick={() => handleCategoryChange("economia")}
            >
              Economia
            </li>
            <li
              className={selectedCategory === "ética" ? styles.active : ""}
              onClick={() => handleCategoryChange("ética")}
            >
              Ética
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.cardsContainer}>
        {filteredCards.map((card) => (
          <div key={card.title} className={styles.card}>
            <h2>
              {card.order[selectedCategory]} - {card.title}
            </h2>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
