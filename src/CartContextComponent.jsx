import React from 'react';
import { createContext, useState } from 'react';

export const cartContext = createContext();

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    const cartAux = [...cart];

    let foundInCart = false;

    for (let i = 0; i < cartAux.length; i++) {
      if (cartAux[i].id == item.id) {
        cartAux[i].count += count;
        foundInCart = true;
      }
    }

    if (!foundInCart) {
      cartAux.push({ ...item, count });
    }

    setCart(cartAux);
  }

  return <cartContext.Provider value={{ cart, addToCart }}>{children}</cartContext.Provider>;
}
