import { useTranslation, Trans } from "react-i18next";
const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
  ca: { nativeName: "Català" },
};
export function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className="shadow">
      <img
        className="pokemon-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="pokemon logo"
      />
      <div className="language-switcher">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              textDecoration:
                i18n.resolvedLanguage === lng ? "underline" : "none",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </header>
  );
}
