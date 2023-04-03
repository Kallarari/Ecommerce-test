import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { movieCardProps } from "./interface";

import {
  ChartButton,
  Container,
  MovieImage,
  MovieName,
  MoviePrice,
  MovieQuantity,
} from "./styles";

export const MovieCard: React.FC<movieCardProps> = ({
  name,
  image,
  value,
}: movieCardProps) => {
  const { products, setProducts } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const [howManyareInTheCart, setHowManyareInTheCart] = useState(0);
  const navigate = useNavigate();
  function AddMovieToChart() {
    if (isInCart) return navigate("/cart");
    if (products)
      return setProducts([
        ...products,
        {
          name: name,
          value: value,
          image: image,
          quantity: 1,
        },
      ]);
    setProducts([
      {
        name: name,
        value: value,
        image: image,
        quantity: 1,
      },
    ]);
  }
  useEffect(() => {
    if (products) {
      sessionStorage.setItem("movies", JSON.stringify(products));
      if (products.find((product) => product.name === name)) {
        setIsInCart(true);
        const moviesFinded = products.filter(
          (product) => product.name === name
        );
        setHowManyareInTheCart(moviesFinded.length);
      }
    }
  }, [products]);

  return (
    <Container>
      <MovieImage alt="movie" src={image} />
      <MovieName>{name}</MovieName>
      <MoviePrice>R$ {value}</MoviePrice>
      <ChartButton
        onClick={AddMovieToChart}
        color={isInCart ? "#039B00" : "#009EDD"}
      >
        <MovieQuantity>
          <Icon icon="material-symbols:add-shopping-cart" />
          {howManyareInTheCart}
        </MovieQuantity>{" "}
        {isInCart ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
      </ChartButton>
    </Container>
  );
};
