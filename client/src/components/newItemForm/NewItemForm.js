import { useState } from "react";
import { useItemsContext } from "../../hooks/useItemsContext";

import "./NewItemForm.css";

function NewItemForm() {
  const { dispatch } = useItemsContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");

  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState(null);
  //   const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const item = { title, description, phone };

    // Fetch request to post the new item
    const response = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newItem = await response.json();

    // Check whether the response status is 200-299
    if (!response.ok) {
      setError(newItem.error);
      setEmptyFields(newItem.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      setPhone("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_ITEM", payload: newItem });
    }
  };

  return (
    <form className="NewItemForm" onSubmit={handleSubmit}>
      <h2>Add a new item</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={emptyFields.includes("description") ? "error" : ""}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={emptyFields.includes("phone") ? "error" : ""}
      />
      <button type="submit">Add item</button>
      {error && <div className="errorBubble">{error}</div>}
    </form>
  );
}

export default NewItemForm;
