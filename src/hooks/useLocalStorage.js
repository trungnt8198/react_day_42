import { useState } from "react";

const useLocalStorage = (key, value) => {
  const savedValue = localStorage.getItem(key);
  const [data, setData] = useState(savedValue ? JSON.parse(savedValue) : value);

  const saveData = (newValue) => {
    setData(newValue);
    localStorage.setItem(key, JSON.stringify(data));
  };
  return [data, saveData];
};

export default useLocalStorage;
