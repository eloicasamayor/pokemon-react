import { PokemonsPagedList } from "./components/views/PokemonsPagedList";
import { HomeView } from "./components/views/HomeView";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { PokemonDetailsPanel } from "./components/views/PokemonDetailsPanel";
import { Header } from "./components/Header";

/* setInterval(() => {
  console.log(store.getState());
}, 2000); */

function App() {
  return (
    <Provider store={store}>
      <Header />

      <HomeView />
    </Provider>
  );
}
export default App;
