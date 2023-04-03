import React from "react";
import { CartContextProvider } from "../../context/cartContext";
import { useCart } from "../../hooks/useCart";

import { Container } from "./styles";

const CartComponent: React.FC = () => {
  const { products, setProducts } = useCart();
  return (
    <CartContextProvider>
      <Container>
        <button onClick={() => console.log(products)}>Alterar valor</button>
      </Container>
    </CartContextProvider>
  );
};
const Cart = () => (
  <CartContextProvider>
    <CartComponent />
  </CartContextProvider>
);
export { Cart };
