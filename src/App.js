import { PokemonsPagedList } from "./components/PokemonsPagedList";
import { store } from "./store/store";
import { Provider } from "react-redux";

/* setInterval(() => {
  console.log(store.getState());
}, 2000); */

function App() {
  return (
    <Provider store={store}>
      <PokemonsPagedList />
    </Provider>
  );
}
export default App;
