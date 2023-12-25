import "./App.css";

import Header from "./components/Header";
import PlusIcon from "./components/PlusIcon";

import Item from "./components/itemCard/Item";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="itemList">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <PlusIcon />
    </div>
  );
}

export default App;
