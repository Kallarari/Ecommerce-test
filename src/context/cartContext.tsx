import React, { createContext, ReactNode, useState } from "react";

export type CartContextDataProps = {
  products: Movie[];
  setProducts: (movie: [Movie]) => void;
};

type Movie = {
  name: string;
  value: number;
  image: string;
  quantity: number;
};

type CartContextProviderProps = {
  children: ReactNode;
};
export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState([
    { name: "lulu", value: 1, image: "none", quantity: 10 },
    { name: "lulu", value: 1, image: "none", quantity: 10 },
  ]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
}
