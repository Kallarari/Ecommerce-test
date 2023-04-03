import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;

  margin-bottom: 21px;

  @media (max-width: 600px) {
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1.5fr 1fr;
    div:last-child {
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
    }
    padding-bottom: 20px;
  }
`;
export const MovieContainer = styled.div`
  display: flex;
`;
export const SubTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: flex;
    padding-left: 100px;
  }
`;
export const MovieInformation = styled.div`
  text-align: center;
  padding-left: 53px;
  max-width: 253px;
  align-content: center;
  align-self: center;

  @media (max-width: 600px) {
    display: flex;
    padding-left: 10px;
  }
`;
export const QuantitySelector = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`;
export const QuantityNumber = styled.div`
  border-radius: 4px;
  border: 1px solid grey;

  width: 62px;
  height: 26px;
  padding: 0px 16px;
  margin: 0 11px;
`;
export const MovieImage = styled.img`
  width: 89px;
  height: 114px;
`;
export const MovieName = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding-bottom: 8px;

  color: #2f2e41;
  @media (max-width: 600px) {
    padding: 0 10px 0 0;
    text-align: center;
    justify-content: center;
  }
`;
export const MoviePrice = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #2f2e41;
`;
export const Subtotal = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #2f2e41;
`;
