import { PokemonsPagedList } from "./components/views/PokemonsPagedList";
import { Home } from "./components/views/Home";
import { Pokemon } from "./components/views/Pokemon";
import { makeStore } from "./store/store";
import { Provider } from "react-redux";
import { PokemonDetailsPanel } from "./components/views/PokemonDetailsPanel";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoPage } from "./components/views/NoPage";

import "./styles/styles.scss";
import { useMemo } from "react";

function App() {
  const store = useMemo(makeStore, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:name" element={<Pokemon />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
