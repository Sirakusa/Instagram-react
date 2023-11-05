import { useState } from "react";

export const useButtonState = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleState = () => setIsActive(!isActive);

  return { isActive, toggleState };
};
