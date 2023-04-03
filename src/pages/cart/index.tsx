import React from "react";
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
  return (
    <Container>
      <Header>
        <th>PRODUTO</th>
        <th>QTD</th>
        <th>SUBTOTAL</th>
      </Header>
      <ChartProduct
        name="viuva negra"
        quantity={4}
        value={10.99}
        moreButton={() => {
          console.log("more");
        }}
        minusButton={() => {
          console.log("minus");
        }}
        trashButton={() => {
          console.log("trash");
        }}
        image="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
      />
      <Line />
      <FooterSection>
        <FinalizationButton>FINALIZAR PEDIDO</FinalizationButton>
        <ValueSection>
          <Total>TOTAL</Total>
          <TotalValue>R$</TotalValue>
        </ValueSection>
      </FooterSection>
    </Container>
  );
};
