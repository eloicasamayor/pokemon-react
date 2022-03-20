import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          footer: {
            part1: "Developed by",
            part2: "Works with",
          },
          pokemonstats: {
            part1: "Height",
            part2: "Weight",
            part3: "Base Experience",
            part4: "Abilities",
            part5: "Moves",
          },
          buttons: {
            prev: "Previous",
            prevtitle: "Go to the previous page",
            next: "Next",
            nexttitle: "Go to the next page",
            moredetails: "More details",
            gotohome: "Go back to the home page",
            moredetailstitle: "See more details about the selected pokemon",
            selectpokemon: "SELECT A POKEMON IN THE LIST...TO SEE THE DETAILS",
          },
        },
      },
      es: {
        translation: {
          footer: {
            part1: "Desarrollado por",
            part2: "Trabaja con",
          },
          pokemonstats: {
            part1: "Altura",
            part2: "Peso",
            part3: "Experiencia Base",
            part4: "Habilidades",
            part5: "Movimientos",
          },
          buttons: {
            prev: "Anterior",
            prevtitle: "Ir a la página anterior",
            next: "Siguiente",
            nexttitle: "Ir a la página siguiente",
            moredetails: "Mas detalles",
            gotohome: "Volver a la página de inicio",
            moredetailstitle: "Ver mas detalles sobre el pokémon seleccionado",
            selectpokemon:
              "SELECCIONA UN POKEMON DE LA LISTA... PARA VER SUS DETALLES",
          },
        },
      },
      ca: {
        translation: {
          footer: {
            part1: "Desenvolupat per",
            part2: "Treballa amb",
          },
          pokemonstats: {
            part1: "Altura",
            part2: "Pes",
            part3: "Experiència Base",
            part4: "Habilitats",
            part5: "Moviments",
          },
          buttons: {
            prev: "Anterior",
            prevtitle: "Anar a la pàgina anterior",
            next: "Següent",
            nexttitle: "Anar a la pàgina següent",
            moredetails: "Més detalls",
            gotohome: "Tornar a la pàgina d'inici",
            moredetailstitle: "Veure més detalls sobre el pokémon seleccionat",
            selectpokemon:
              "SELECCIONA UN POKEMON DE LA LLISTA... PER A VEURE ELS SEUS DETALLS",
          },
        },
      },
    },
  });

export default i18n;
