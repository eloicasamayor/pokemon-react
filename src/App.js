import { PokemonsPagedList } from "./components/views/PokemonsPagedList";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { PokemonDetailsPanel } from "./components/views/PokemonDetailsPanel";

/* setInterval(() => {
  console.log(store.getState());
}, 2000); */

function App() {
  return (
    <Provider store={store}>
      <PokemonsPagedList />
      <PokemonDetailsPanel />
    </Provider>
  );
}
export default App;
