// import CharactersList from "./components/CharactersList/CharactersList";
import GoodsList from "./components/GoodsList/GoodsList";

import Goods from "./data/goods.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <CharactersList /> */}
      <GoodsList items={Goods} />
    </div>
  );
}

export default App;
