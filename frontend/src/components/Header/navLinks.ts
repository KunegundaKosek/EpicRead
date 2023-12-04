import { NavLinksProps } from "../../interfaces/NavLinks";

export const navLinksLeft: NavLinksProps[] = [
  {
    id: 0,
    title: "Strona główna",
    link: "/",
    className: "",
  },

  {
    id: 1,
    title: "Książki",
    link: "/books",
  },

  {
    id: 2,
    title: "Dodaj książkę",
    link: "/addbooks",
  },
];

export const navLinksRight: NavLinksProps[] = [
  {
    id: 3,
    title: "Zaloguj się",
    link: "/login",
  },

  {
    id: 4,
    title: "Zarejestruj się",
    link: "/register",
  },

  {
    id: 5,
    title: "Kontakt",
    link: "/contact",
  },
];
