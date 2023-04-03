import { Icon } from "@iconify/react";
import React from "react";
import { chartProductProps } from "./interface";

import {
  Container,
  MovieContainer,
  MovieImage,
  MovieInformation,
  MovieName,
  MoviePrice,
  QuantityNumber,
  QuantitySelector,
  Subtotal,
  SubTotalContainer,
} from "./styles";

export const ChartProduct: React.FC<chartProductProps> = ({
  name,
  value,
  image,
  quantity,
  moreButton,
  minusButton,
  trashButton,
}: chartProductProps) => {
  return (
    <Container>
      <MovieContainer>
        <MovieImage alt="movie" src={image} />
        <MovieInformation>
          <MovieName>{name}</MovieName>
          <MoviePrice>R$ {value}</MoviePrice>
        </MovieInformation>
      </MovieContainer>
      <QuantitySelector>
        <Icon onClick={moreButton} icon="mdi:plus-circle-outline" />
        <QuantityNumber>{quantity}</QuantityNumber>
        <Icon onClick={minusButton} icon="ant-design:minus-circle-outlined" />
      </QuantitySelector>
      <SubTotalContainer>
        <Subtotal>R$ {quantity * value}</Subtotal>
        <Icon
          onClick={trashButton}
          width={25}
          color="#009EDD"
          icon="mdi:trash"
        />
      </SubTotalContainer>
    </Container>
  );
};
