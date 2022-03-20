import { PokemonExtendedDetails } from "../PokemonExtendedDetails";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
export function Pokemon() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  return (
    <>
      <Link
        className="link-to-home"
        to={"/"}
        alt={t("buttons.gotohome")}
        title={t("buttons.gotohome")}
      >
        <div>{"‹"}</div>
      </Link>
      <PokemonExtendedDetails name={params.name} />
    </>
  );
}
