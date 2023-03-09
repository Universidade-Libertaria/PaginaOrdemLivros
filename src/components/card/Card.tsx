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
  desciprion: string;
};

const arrayCards: Card[] = [
  {
    title: "Homem Economia e Estado com Poder e Mercado | Murray N. Rothbard",
    image: "/homem-economia-e-estado-rothbard.png",
    categories: ["Economia", "TeoriaJurídica", "Agorismo", "Política"],
    order: { Política: 1, Economia: 1, TeoriaJurídica: 5, Agorismo: 3 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=9777",
    desciprion:
      "Você verá argumentos que defendem o livre mercado e a demonstração de que a intervenção do governo na economia é ineficiente e imoral. Aqui temos a teoria completa da economia, incluindo a teoria do valor subjetivo, teoria do ciclo econômico e teoria da ação humana. A leitura do livro oferece um entendimento abrangente e profundo da economia, e permite que o leitor compreenda como as interações voluntárias entre os indivíduos que levam ao progresso e bem-estar social e as interações coercitivas, que levam ao declínio do bem-estar social.",
  },
  {
    title: "O Mito da Defesa Nacional | Hans Hermann Hoppe",
    image: "/o-mito-da-defesa-nacional.png",
    categories: ["TeoriaJurídica", "Política"],
    order: { Política: 2, TeoriaJurídica: 1 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=7900",
    desciprion:
      "Aqui você verá argumentos contra à ideia de que o estado é necessário para garantir a defesa nacional e argumentos para que a produção de segurança deva ser privada. Hoppe apresenta uma teoria da produção privada de segurança e uma análise histórica da produção de segurança em sociedades sem estado. A leitura do livro permite ao leitor compreender as falhas do modelo de defesa nacional baseado no estado e as alternativas viáveis para a produção de segurança em uma sociedade livre.",
  },
  {
    title: "O Estado | Franz Oppenheimer",
    image: "/O-Estado-Oppenheimer.png",
    categories: ["Economia", "TeoriaJurídica", "História", "Política"],
    order: { Política: 3, Economia: 6, TeoriaJurídica: 4, História: 2 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=19124",
    desciprion:
      "Aqui você conhecerá os fatos que demonstram o estado como ele é: uma instituição que se baseia na violência e que seu objetivo é preservar e expandir seu poder. Oppenheimer apresenta uma teoria da origem do estado a partir da conquista, e uma análise das formas históricas de organização política. A leitura do livro permite ao leitor compreender a natureza inerentemente violenta do estado e as implicações de sua existência para a liberdade e o bem-estar da sociedade, além de compreender a verdadeira 'luta de classes'.",
  },
  {
    title: "Sistemas Legais Muito Diferentes Do Nosso | David Friedman",
    image: "/sistemas.png",
    categories: ["TeoriaJurídica", "Política", "História", "Economia"],
    order: { Política: 4, TeoriaJurídica: 2, História: 1, Economia: 7 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=19432",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title: "Keynes: o Homem",
    image: "/Keynes-Livros.png",
    categories: ["História"],
    order: { História: 7 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=18932",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title: "Mises: Acadêmico, Criador e Herói",
    image: "/misesHeois.png",
    categories: ["História", "Economia"],
    order: { História: 8, Economia: 5 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=18926",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title:
      "Contraeconomia: Fugindo das Garras Tecnocráticas do Estado | Broze e Konkin",
    image: "/Contraeconomia-Fugindo-das-Garras-Tecnocraticas-do-Estado.png",
    categories: ["História", "Agorismo", "Política"],
    order: { Política: 5, História: 3, Agorismo: 1 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=18087",
    desciprion:
      "Você entenderá que a tecnologia pode ser usada tanto para o bem quanto para o mal, e que os indivíduos devem tomar medidas para proteger sua privacidade e liberdade. Os argumentos demonstram uma análise dos perigos da tecnologia para a privacidade e liberdade individuais, bem como soluções práticas para se proteger contra a vigilância tecnológica. A leitura do livro permite ao leitor compreender as ameaças à privacidade e liberdade individuais na era tecnológica e oferece soluções práticas para se proteger contra elas.",
  },
  {
    title: "O Socialismo | Ludwig von Mises",
    image: "/socialismo-ludwig-von-mises.png",
    categories: ["Economia", "Política"],
    order: { Política: 6, Economia: 2 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=7593",
    desciprion:
      "Aqui você terá uma análise abrangente do socialismo, argumentando que o sistema é inerentemente falho e leva a resultados econômicos e sociais desastrosos. Mises apresenta sua teoria da ação humana, destacando como a liberdade individual e a propriedade privada são essenciais para o progresso e bem-estar social. A leitura do livro permite ao leitor compreender as falhas do socialismo e a importância da economia de mercado para a prosperidade e a liberdade individual.",
  },
  {
    title: "A Política e a Fé Cristã | Lucas Rosalem",
    image: "/capa-a-politica-e-a-fe-crista.png",
    categories: ["História", "Política", "TeoriaJurídica"],
    order: { Política: 7, História: 4, TeoriaJurídica: 7 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=17922",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title: "A Traição da Direita Americana | Murray Rothbard",
    image: "/capa-a-traicao-da-direita-americana.png",
    categories: ["História", "Política"],
    order: { Política: 8, História: 9 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=16052",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title:
      "O Alvorecer da Liberdade – O que é Liberdade? | Universidade Libertária",
    image: "/alvorecer-da-liberdade.png",
    categories: ["Economia", "Política", "TeoriaJurídica"],
    order: { Política: 9, Economia: 4, TeoriaJurídica: 3 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=13866",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title: "Bastiat, Ainda Invicto | Frédéric Bastiat",
    image: "/bastiat-ainda-invicto.png",
    categories: ["História", "Política"],
    order: { Política: 10, História: 5 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=7931",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title: "Revolução Satoshi | Wendy McElroy",
    image: "/revolucao-satoshi.png",
    categories: ["Agorismo", "Política"],
    order: { Política: 11, Agorismo: 2 },
    href: "https://universidadelibertaria.com.br/loja/page/2/?add-to-cart=10685 ",
    desciprion:
      "A tecnologia blockchain e a criptomoeda são ferramentas poderosas para a liberdade individual e a descentralização e oferecem alternativas ao controle estatal centralizado. McElroy apresenta uma análise da história do dinheiro e das finanças, bem como uma crítica ao sistema bancário e ao papel do estado na economia. A leitura do livro permite ao leitor compreender a importância da tecnologia blockchain e da criptomoeda para a liberdade individual e oferece uma visão geral da filosofia libertária em relação ao dinheiro e às finanças.",
  },
  {
    title: "Pelo Fim do Banco Central | Rothbard",
    image: "/pelo-fim-do-banco-central.png",
    categories: ["Economia", "Política", "TeoriaJurídica", "História"],
    order: { Política: 12, Economia: 3, TeoriaJurídica: 6, História: 6 },
    href: "https://universidadelibertaria.com.br/loja/?add-to-cart=17489",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
  {
    title: "Todos os Livros",
    image: "/Todos-os-Livros.png",
    categories: ["Todos"],
    order: { Todos: 1 },
    href: "https://universidadelibertaria.com.br/categoria-produto/pre-venda/?add-to-cart=10741",
    desciprion: "Livro de introdução ao anarcocapitalismo",
  },
];

export function Card() {
  const [selectedCategory, setSelectedCategory] = useState("Política");
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const filteredCards = arrayCards
    .filter((card) => card.categories.includes(selectedCategory))
    .sort((a, b) => a.order[selectedCategory] - b.order[selectedCategory]);

  const handleFlip = (cardTitle: string) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [cardTitle]: !prevFlippedCards[cardTitle],
    }));
  };

  return (
    <div className={styles.wrapper}>
      <h3>CATEGORIAS</h3>
      <div className={styles.categoriesContainer}>
        <nav>
          <ul>
            <li
              className={selectedCategory === "Todos" ? styles.active : ""}
              onClick={() => handleCategoryChange("Todos")}
            >
              Todos os Livros
            </li>
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
            key={card.title}
          >
            <div>
              <h4>
                {card.order[selectedCategory]}º - {card.title}
              </h4>
              {flippedCards[card.title] ? (
                <div className={styles.flippedCard}>
                  <p>{card.desciprion}</p>
                </div>
              ) : (
                <img src={card.image} alt={card.title} />
              )}
            </div>
            <div className={styles.buttonsContainer}>
              <Link href={card.href} target='_blank'>
                Comprar
              </Link>
              <button onClick={() => handleFlip(card.title)}>
                {flippedCards[card.title] ? "Capa" : "Descrição"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
