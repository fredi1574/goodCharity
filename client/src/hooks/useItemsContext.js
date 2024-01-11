import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export const useItemsContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemContextProvider"
    );
  }

  return context;
};
