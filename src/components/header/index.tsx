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

export const Header: React.FC = () => {
  return (
    <Container>
      <WeMoviesTitle>WeMovies</WeMoviesTitle>
      <CartContainer>
        <CartText>
          <CartName>Meu Carrinho</CartName>
          <CartItens>1 item</CartItens>
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
