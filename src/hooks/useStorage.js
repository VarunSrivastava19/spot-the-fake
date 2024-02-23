import { useState } from "react";
export default function useStorage(key, initVal) {
  const [storedVal, setStoredVal] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initVal;
    } catch (error) {
      console.log(error);
      return initVal;
    }
  });

  const setVal = (val) => {
    try {
      const valToStore = val instanceof Function ? val(storedVal) : val;
      setStoredVal(valToStore);
      console.log("Storing to LocalStorage");
      console.log("Key : ", key);
      window.localStorage.setItem(key, JSON.stringify(valToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const getVal = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initVal;
    } catch (error) {
      console.log(error);
      return initVal;
    }
  };
  return [storedVal, setVal, getVal];
}
