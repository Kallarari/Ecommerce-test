import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChartProduct } from "../../components/chartProduct";
import { useCart } from "../../hooks/useCart";

import {
  Container,
  FinalizationButton,
  FooterSection,
  Header,
  Line,
  Total,
  TotalValue,
  ValueSection,
} from "./styles";

export const Cart: React.FC = () => {
  const { products, setProducts } = useCart();
  const [total, setTotal] = useState(0);
  function deleteMovie(key: number) {
    products.splice(key, 1);
    setProducts([...products]);
  }
  useEffect(() => {
    var value = 0;
    products.map((item) => (value = value + item.value));
    setTotal(Math.round(value));
  }, []);
  return (
    <Container>
      <Header>
        <th>PRODUTO</th>
        <th>QTD</th>
        <th>SUBTOTAL</th>
      </Header>
      <>
        {products &&
          products.map((movie, key) => (
            <ChartProduct
              name={movie.name}
              quantity={movie.quantity}
              value={movie.value}
              moreButton={() => {
                console.log("more");
              }}
              minusButton={() => {
                console.log("minus");
              }}
              trashButton={() => {
                deleteMovie(key);
              }}
              image={movie.image}
            />
          ))}
      </>
      <Line />
      <FooterSection>
        <Link to="/purchase">
          <FinalizationButton>FINALIZAR PEDIDO</FinalizationButton>
        </Link>
        <ValueSection>
          <Total>TOTAL</Total>
          <TotalValue>R$ {total}</TotalValue>
        </ValueSection>
      </FooterSection>
    </Container>
  );
};
