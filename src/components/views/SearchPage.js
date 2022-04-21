import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemons, setSearchResults } from "../../store/actions";
import { requestAllPokemons } from "../../store/actions";
import { isEmpty } from "../../store/middleware";
import { selectSearchResults } from "../../store/selectors";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function SearchPage() {
  const { t, i18n } = useTranslation();
  const inputRef = useRef();
  const searchResults = useSelector(selectSearchResults);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchResults({}));
    if (isEmpty(searchResults)) dispatch(requestAllPokemons());
  }, []);

  const search = (e) => {
    e.preventDefault();
    dispatch(searchPokemons(inputRef.current.value));
  };
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
      <div className="search-page">
        <form onSubmit={(e) => search(e)}>
          <input
            type="text"
            onChange={(e) => search(e)}
            ref={inputRef}
            placeholder="search a pokemon"
          ></input>
        </form>
        {!isEmpty(searchResults) && (
          <ul className="pokemons-list">
            {searchResults.map((pokemon, i) => (
              <Link to={`/${pokemon.name}`}>
                <li key={i}>{pokemon.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
