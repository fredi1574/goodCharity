import { useState, useEffect } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

// Components
import Header from "./components/header/Header";
import PlusIcon from "./components/plusIcon/PlusIcon";
import Item from "./components/itemCard/Item";
// import SignUp from "./components/signUp/SignUp";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from API
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/items");
        // Check whether the response status is 200-299
        if (!response.ok) {
          throw new Error(`An error has occured: ${response.status}`);
        }

        const jsonObjects = await response.json();
        setItems(jsonObjects);
        setIsLoading(false);
        // Catch errors involving broader networking issues (not just response status)
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  //TODO: create a container component that will render all the items

  return (
    <div className="app">
      <Header />
      {/* <div className="body"><SignUp /></div> */}
      {isLoading && <div className="loader">Loading...</div>}
      {!isLoading && items.map((item) => <Item key={item._id} item={item} />)}
      <PlusIcon />
    </div>
  );
}

export default App;
