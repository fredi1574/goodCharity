import React from "react";
import { useItemsContext } from "../../hooks/useItemsContext";

import "./Item.css";
import { FaPhoneAlt } from "react-icons/fa";

// TODO: Create a modal for item details when item card is clicked

function Item({ item }) {
  const { dispatch } = useItemsContext();

  // Destructuring the item object for individual properties
  const { _id, title, description, phone } = item;

  // Function to delete an item
  const handleDelete = async () => {
    const response = await fetch("/api/items/" + _id, {
      method: "DELETE",
    });

    const deletedItem = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: deletedItem });
    }
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src="https://picsum.photos/500/500" alt="item" />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="phoneNumber">
          <FaPhoneAlt className="phoneIcon" />
          {phone}
        </div>
        <span onClick={handleDelete}>Delete</span>
      </div>
    </div>
  );
}

export default Item;
