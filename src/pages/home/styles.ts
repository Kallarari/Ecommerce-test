import styled from "styled-components";

export const Container = styled.div``;
export const MoviesContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  max-width: 960px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
