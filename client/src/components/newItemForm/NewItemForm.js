import { useState } from "react";

import "./NewItemForm.css";

function NewItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");

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
    const data = await response.json();

    // Check whether the response status is 200-299
    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      setPhone("");
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
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add item</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default NewItemForm;
