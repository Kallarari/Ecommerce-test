import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Image, Title } from "./styles";

export const Purchase: React.FC = () => {
  return (
    <Container>
      <Title>Compra realizada com sucesso!</Title>
      <Image src="compraRealizada.png" />
      <Link to="/">
        <Button>VOLTAR</Button>
      </Link>
    </Container>
  );
};
