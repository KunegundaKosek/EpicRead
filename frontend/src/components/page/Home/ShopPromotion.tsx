import React from "react";
import Button from "../../UI/Button";
import Lightning from "../../../assets/svg/Lightning";

import styles from '../../../css/components/Home/ShopPromotion.module.css';

const ShopPromotion = () => {
  return (
    <section className={styles.container}>
      <div className={styles.svg}>
            <Lightning />
      </div>
      <h2>Jaki jest Twój wybór?</h2>
      <p>
        Bez względu na to, czy preferujesz romantyki czy sensacje, faktyczne czy
        wykreowane, odkryj portal do swojego preferowanego gatunku.
      </p>
      <Button to='/books'>Kupuj teraz</Button>
    </section>
  );
};

export default ShopPromotion;
