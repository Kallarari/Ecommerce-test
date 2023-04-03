import React from "react";
import { Icon } from "@iconify/react";

import {
  CartContainer,
  CartItens,
  CartName,
  CartText,
  Container,
  IconContainer,
  WeMoviesTitle,
} from "./styles";
import { useCart } from "../../hooks/useCart";

export const Header: React.FC = () => {
  const { products } = useCart();

  return (
    <Container>
      <WeMoviesTitle>WeMovies</WeMoviesTitle>
      <CartContainer>
        <CartText>
          <CartName>Meu Carrinho</CartName>
          <CartItens>
            {!products && 0}
            {products && products.length}
            {products && products.length > 1 ? " itens" : " item"}
          </CartItens>
        </CartText>
        <IconContainer>
          <Icon
            icon="material-symbols:shopping-basket"
            color="white"
            width={32}
          />
        </IconContainer>
      </CartContainer>
    </Container>
  );
};
