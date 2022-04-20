import { Home, Pokemon, SearchPage } from "./components/views";
import { makeStore } from "./store/store";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoPage } from "./components/views/NoPage";
import "./styles/styles.scss";
import { useMemo } from "react";

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
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
