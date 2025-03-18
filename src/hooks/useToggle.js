import React from "react";
import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [isToggled, setToggled] = useState(initialValue);
  return [isToggled, () => setToggled(!isToggled)];
};

export default useToggle;
