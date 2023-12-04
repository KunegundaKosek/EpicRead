import React from "react";
import styles from "../../../css/components/Home/Intro.module.css";
import Lightning from "../../../assets/svg/Lightning";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.introSvg}>
            <Lightning />
      </div>
      <div className={styles.introBox}>
        <h2>Witaj w Raju dla Miłośników Książek</h2>
        <p>
          Twoje najbardziej wyjątkowe marzenia właśnie otworzyły drzwi do
          spełnienia. Odkryj tajemniczy świat książek autorów, którzy zabiorą
          Cię w podróż przez różnorodne wymiary.
        </p>
        <p>
          Od klasyki po thrillery, science-fiction i biografie – mamy wszystko
          pod ręką. Przygotuj się na zatracenie się w niewyobrażalnych głębinach
          literatury.
        </p>
        <p>
          Ponadto, nasza niezwykła kolekcja książek zanurzy Cię w nostalgicznych
          falach, rozśmieszy w wyjątkowy sposób, a także dostarczy ekscytujących
          przeżyć.
        </p>
        </div>
    </section>
  );
};

export default Intro;
