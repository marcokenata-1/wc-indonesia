import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function rupiahDenomination(number) {
  return (
    <>
      Rp{" "}
      <NumericFormat
        value={number}
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
        displayType={"text"}
      />
    </>
  );
}

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });


  useEffect(() => {
    // storing input name
    console.log(value);

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
