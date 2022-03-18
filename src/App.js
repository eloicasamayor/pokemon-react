import { Home } from "./components/views/Home";
import { Pokemon } from "./components/views/Pokemon";
import { makeStore } from "./store/store";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoPage } from "./components/views/NoPage";
import "./styles/styles.scss";
import { useMemo } from "react";
import { loadPokemons } from "./store/actions";
import { getPokemonsList } from "./components/PokemonsPagedList";

function App() {
  const store = useMemo(makeStore, []);

  return (
    <Provider store={store}>
      <BrowserRouter basename="/pokemon-react">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:name" element={<Pokemon />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
