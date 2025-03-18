import { useEffect, useState } from "react";

const useLocalStorage = (key, value) => {
  const savedValue = localStorage.getItem(key);
  const [data, setData] = useState(savedValue ? JSON.parse(savedValue) : value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, (newValue) => setData(newValue)];
};

export default useLocalStorage;
