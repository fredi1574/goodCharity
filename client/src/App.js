import { useState, useEffect } from "react";
import { useItemsContext } from "./hooks/useItemsContext";
// import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

// Components
import Header from "./components/header/Header";
import PlusIcon from "./components/plusIcon/PlusIcon";
import Item from "./components/itemCard/Item";
import NewItemForm from "./components/newItemForm/NewItemForm";
import SignUp from "./components/signUp/SignUp";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { items, dispatch } = useItemsContext();

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

        setIsLoading(false);
        dispatch({ type: "SET_ITEMS", payload: jsonObjects });
        // Catch errors involving broader networking issues (not just response status)
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [dispatch]);

  //TODO: create a container component that will render all the items

  return (
    <div className="app">
      <Header />
      {/* <SignUp /> */}
      <NewItemForm />
      {isLoading && <div className="loader">Loading...</div>}
      <div className="itemList">
        {!isLoading && items.length === 0 && <p>No items</p>}
        {!isLoading && items.map((item) => <Item key={item._id} item={item} />)}
      </div>
      <PlusIcon />
    </div>
  );
}

export default App;
