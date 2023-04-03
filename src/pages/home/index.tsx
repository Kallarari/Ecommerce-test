import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieCard } from "../../components/movieCard";

import { Container, MoviesContainer } from "./styles";

export const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setMovies(response.data);
    });
  }, []);
  return (
    <Container>
      <MoviesContainer>
        {movies &&
          movies.map((item: any) => (
            <MovieCard
              name={item.title}
              value={item.price}
              image={item.image}
            />
          ))}
      </MoviesContainer>
    </Container>
  );
};
