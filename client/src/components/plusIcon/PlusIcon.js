import React from "react";
import { FaPlus } from "react-icons/fa";

import "./PlusIcon.css";

function PlusIcon() {
  const handleClick = () => {
    console.log("Add button clicked");
  };

  return <FaPlus className="plus-icon" onClick={handleClick} />;
}

export default PlusIcon;
