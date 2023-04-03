import styled from "styled-components";

export const Container = styled.div`
  width: 287px;
  height: 305px;
  background: #ffffff;
  border-radius: 4px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 11px;
`;
export const MovieImage = styled.img`
  width: 147px;
  height: 188px;
  align-self: center;
`;
export const MovieName = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #333333;
  margin: 7px 0 0 0;
`;
export const MoviePrice = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #2f2e41;

  margin: 2px 0 8px 0;
`;
export const MovieQuantity = styled.span`
  display: flex;
  align-content: center;
  gap: 5px;
`;
export const ChartButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-weight: 700;
  font-size: 12px;
  padding: 8px;
  gap: 12px;

  width: 287.33px;
  height: 40px;

  background: ${(props) => props.color};
  color: white;
  border-radius: 4px;
  border: 0;

  cursor: pointer;
`;
