import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../store/actions";

export function SearchPage() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    dispatch(searchPokemons(inputRef.current.value));
    console.log("searching" + inputRef.current.value);
  };
  return (
    <div className="home">
      <form onSubmit={(e) => search(e)}>
        <input type="text" onChange={(e) => search(e)} ref={inputRef}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
