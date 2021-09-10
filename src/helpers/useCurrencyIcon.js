import { useEffect } from "react";

export const icons = {
  uah: "₴",
  usd: "$",
  eur: "€",
};

export const useCurrencyIcon = (currency, setCurrencyIcon) => {
  useEffect(() => {
   
    for (let key in icons) {
      if (currency === key) setCurrencyIcon(icons[key]);
    }
  }, [currency, setCurrencyIcon, icons]);
};