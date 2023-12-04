import React from "react";
import Button from "../UI/Button";

import { navLinksLeft, navLinksRight } from "./navLinks";

import Scribble from "../../assets/svg/Scribble";
import styles from "../../css/components/Header/Header.module.css";

const Header = () => {
  return (
    <section>
      <header className={styles.header}>
        <nav>
            {navLinksLeft.map((link) => (
              <Button className={link.className} key={link.id} to={link.link}>
                {link.title}
              </Button>
            ))}

          <Scribble />

            {navLinksRight.map((link) => (
              <Button className={link.className} key={link.id} to={link.link}>
                {link.title}
              </Button>
            ))}
        </nav>

        <h1>EPICREADS</h1>
      </header>
    </section>
  );
};

export default Header;
