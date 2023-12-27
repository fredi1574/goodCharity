import "./App.css";

import Header from "./components/header/Header";
import PlusIcon from "./components/plusIcon/PlusIcon";
import Item from "./components/itemCard/Item";
import SignUp from "./components/signUp/SignUp";

function App() {
  //For testing purposes only.
  //TODO: create a component that will render all the items
  const items = [];
  for (let i = 0; i < 30; i++) {
    items.push(<Item key={i} />);
  }

  return (
    <div className="app">
      <Header />
      <div className="body">
        <SignUp />
        {/* <div className="itemList">{items}</div> */}
      </div>
      <PlusIcon />
    </div>
  );
}

export default App;
