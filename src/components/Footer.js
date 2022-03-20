import { useTranslation } from "react-i18next";
export function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="shadow">
      <span>
        {t("footer.part1")}{" "}
        <a
          href="https://eloicasamayor.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
          title="Eloi Casamayor Esteve Portfolio"
        >
          Eloi Casamayor Esteve
        </a>
      </span>
      <span>
        {t("footer.part2")}{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noreferrer"
          title="pokeapi.co"
        >
          PokéAPI
        </a>
      </span>
    </footer>
  );
}
