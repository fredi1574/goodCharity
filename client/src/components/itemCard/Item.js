import React from "react";

import "./Item.css";
import { FaPhoneAlt } from "react-icons/fa";

function Item({ item }) {
  const { title, description, phone } = item;

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
      </div>
    </div>
  );
}

export default Item;
