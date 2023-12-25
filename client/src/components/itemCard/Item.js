import React from "react";

import "./Item.css";
import { FaPhoneAlt } from "react-icons/fa";

function Item() {
  const title = "Title";
  const description = "Description";
  const phone = "+972-555-555-555";

  return (
    <div className="card">
      <div className="card-image">
        <img src="https://picsum.photos/500/500" alt="item" />
      </div>
      <div className="card-body">
        <div className="card-header">
          <h2>{title}</h2>
        </div>
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
