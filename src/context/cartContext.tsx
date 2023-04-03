import React, { createContext, ReactNode, useState } from "react";

export type CartContextDataProps = {
  products: Movie[];
  setProducts: (movie: Array<any>) => void;
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
  const [products, setProducts] = useState<any>();

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
}
