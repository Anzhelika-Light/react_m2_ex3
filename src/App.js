// import CharactersList from "./components/CharactersList/CharactersList";
// import GoodsList from "./components/GoodsList/GoodsList";
import Reader from "./components/Reader/Reader";

// import Goods from "./data/goods.json";
import publications from "./data/publications.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <CharactersList /> */}
      {/* <GoodsList items={Goods} /> */}
      <Reader items={publications} />
    </div>
  );
}

export default App;
