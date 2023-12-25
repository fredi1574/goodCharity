import React from "react";
import { FaPlus } from "react-icons/fa";

import "./style/PlusIcon.css";

function PlusIcon() {
  const handleClick = () => {
    console.log("clicked");
  };

  return <FaPlus className="plus-icon" onClick={handleClick} />;
}

export default PlusIcon;
